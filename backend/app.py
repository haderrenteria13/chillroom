from dotenv import load_dotenv
from flask import Flask
from flask_session import Session

from controllers import register_endpoints

SESSION = Session()

def create_app():
    load_dotenv()
    app = Flask(__name__)
    app.config['SESSION_TYPE'] = 'filesystem'
    app.config['SESSION_FILE_DIR'] = 'sessions'

    SESSION.init_app(app)

    register_endpoints(app)

    return app
