from os import getenv

import google.generativeai as genai
from flask import Response, jsonify, request
from flask.blueprints import Blueprint

prompts_bp = Blueprint('prompts', __name__)

GOOGLE_API_KEY = getenv('GOOGLE_API_KEY') # TODO mover al módulo app
if not GOOGLE_API_KEY:
    raise Exception('text') # TODO cambiar el tipo de excepción y su texto
genai.configure(api_key=GOOGLE_API_KEY)

@prompts_bp.route('/getanswer', methods=['GET'])
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
    promt = request.json.get('prompt')
    if not promt:
        return Response('You have to provide a prompt', status=400)
    elif len(promt) > 50:
        return Response('The prompt is too long', status=400)

    model = genai.GenerativeModel('gemini-pro')

    # TODO usar start_chat junto con sesiones para mantener una conversación
    # TODO limitar el número de mensajes a unos 50 (y limitar el número de caracteres también)
    response = model.generate_content(promt) # TODO verificar cuando el modelo da errores por uso inadecuado

    return jsonify(msg=response.text)