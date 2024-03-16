from flask import Flask

from controllers import register_endpoints

def create_app():
    app = Flask(__name__)

    register_endpoints(app)

    return app