from os import getenv

import google.generativeai as genai
from flask import Response, jsonify, request, session
from flask.blueprints import Blueprint

from settings import SAFETY_SETTINGS, PERSONALITIES

prompts_bp = Blueprint('prompts', __name__, url_prefix='/chat')

GOOGLE_API_KEY = getenv('GOOGLE_API_KEY') # TODO mover al módulo app
if not GOOGLE_API_KEY:
    raise ValueError('No Google API key provided')
genai.configure(api_key=GOOGLE_API_KEY)


@prompts_bp.route('/start', methods=['GET', 'DELETE'])
def start_chat():
    # TODO add docstrings
    if not session.get('username'):
        return Response('Anonymous user has not been set', status=403)

    if request.method == 'DELETE':
        if not session.get('messages'):
            return Response('You have not started a conversation', status=400)

        session['message_count'] = 0
        del session['messages']

    if not request.json or not request.json.get('personality'):
        return Response('Missing request data', 400)
    elif request.json.get('personality') not in PERSONALITIES:
        return Response('Personality not valid', 400)

    messages: list[dict[str, str | list[str]]] = []
    messages.append(
        {'role': 'user', 'parts': [PERSONALITIES[request.json['personality']]]}
    )

    response = genai.GenerativeModel('gemini-pro').generate_content(messages).text

    messages.append({'role': 'model', 'parts': [response]})
    session['messages'] = messages

    return jsonify(msg=response)

@prompts_bp.route('/answer', methods=['GET'])
def get_ai_answer():
    """Envía un prompt a GPT-3.5 con la personalidad dada para obtener una respuesta.

    GET:
        Parameters:
            prompt: El mensaje que se va a enviar a GPT-3.5.

            personality: La personalidad que GPT-3.5 va a encarar a la hora de
            responder la pregunta.

        Responses:
            200:
                Description: Se obtuvo una respuesta correcta de GPT-3.5.

                Content:
                - message: La respuesta provista por GPT-3.5.
    """
    if not session.get('username'):
        return Response('Anonymous user has not been set', status=403)
    elif not session.get('messages'):
        return Response('You have not started a conversation', status=400)

    if session['message_count'] == 10:
        return Response('Message limit exceeded', status=403) # TODO verificar si el status code usado es el adecuado

    if not request.json:
        return Response('Request must have JSON body', status=400)

    promt = request.json.get('prompt')
    if not promt:
        return Response('You have to provide a prompt', status=400)
    elif len(promt) > 100:
        return Response('The prompt is too long', status=400)

    session['messages'].append({'role': 'user', 'parts': [promt]})

    response = (
        genai
        .GenerativeModel('gemini-pro')
        .generate_content(
            session['messages'],
            safety_settings=SAFETY_SETTINGS
        )
    )

    print(response.candidates[0].safety_ratings) # TODO convertir a logs
    print(response.prompt_feedback)

    session['messages'].append({'role': 'model', 'parts': [response.text]})
    session['message_count'] += 1

    return jsonify(msg=response.text, msg_count=session['message_count'])
