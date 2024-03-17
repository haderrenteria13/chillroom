from time import time_ns

from flask import render_template, request, session
from flask.blueprints import Blueprint

users_bp = Blueprint('users', __name__)

@users_bp.route('/')
def main_page():
    return render_template('welcome.html')

@users_bp.route('/assistants', methods=['GET', 'PUT'])
def create_temp_user():
    # TODO add docstrings
    session['username'] = f'user_{time_ns()}'
    session['message_count'] = 0

    if request.method == 'PUT':
        session['message_count'] = 0
        del session['messages']

    return render_template('assistants.html')