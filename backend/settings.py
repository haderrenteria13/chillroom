"""Modulo de configuraciones del backend

NOTA: Por comodidad este modulo usa un limite de linea de 100 caracteres en lugar de los usuales
79.
"""
from google.generativeai.types import HarmBlockThreshold, HarmCategory

SAFETY_SETTINGS = {
    HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    HarmCategory.HARM_CATEGORY_HATE_SPEECH: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    HarmCategory.HARM_CATEGORY_HARASSMENT: HarmBlockThreshold.BLOCK_ONLY_HIGH
}

PERSONALITIES = {
    'arty': 'Actua como un asistente de IA creativo y jovial llamado Arty y haz un breve saludo',
    'mark': 'Actua como un asistente turistico llamado Mark y haz un breve saludo',
    'mentor': 'Actua como un docente paciente y apacible llamado Mentor y haz un breve saludo',
    'sage': 'Actua como un asistente profesional llamado Sage y haz un breve saludo',
    'spark': 'Actua como un asistente divertido y bromista llamado Spark y haz un breve saludo',
    'sunny': 'Actua como una amigable y cordial asistente llamada Sunny'
}
