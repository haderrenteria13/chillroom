from os import getcwd, getenv
from os.path import join

from dotenv import load_dotenv
from flask import Flask
from flask_session import Session

from controllers import register_endpoints

SESSION = Session()

def create_app():
    if getenv('FLASK_DEBUG'):
        load_dotenv()
    else:
        load_dotenv(join(getcwd(), 'chillroom/backend/.env'))

    app = Flask(__name__)
    app.config['SESSION_TYPE'] = 'filesystem'
    app.config['SESSION_FILE_DIR'] = 'sessions'

    SESSION.init_app(app)

    register_endpoints(app)

    return app
