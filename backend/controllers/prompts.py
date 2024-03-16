from os import getenv

import google.generativeai as genai
from flask import Response, jsonify, request, session
from flask.blueprints import Blueprint

prompts_bp = Blueprint('prompts', __name__, url_prefix='/chat')

GOOGLE_API_KEY = getenv('GOOGLE_API_KEY') # TODO mover al módulo app
if not GOOGLE_API_KEY:
    raise ValueError('No Google API key provided')
genai.configure(api_key=GOOGLE_API_KEY)

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

    if not request.json:
        return Response('Request must have JSON body', status=400)

    promt = request.json.get('prompt')
    if not promt:
        return Response('You have to provide a prompt', status=400)
    elif len(promt) > 100:
        return Response('The prompt is too long', status=400)

    model = genai.GenerativeModel('gemini-pro')

    # TODO usar start_chat junto con sesiones para mantener una conversación
    response = model.generate_content(promt) # TODO verificar cuando el modelo da errores por uso inadecuado

    if session['message_count'] == 50:
        return Response('Message limit exceeded', status=403) # TODO verificar si el status code usado es el adecuado

    session['message_count'] += 1

    return jsonify(msg=response.text, msg_count=session['message_count'])
