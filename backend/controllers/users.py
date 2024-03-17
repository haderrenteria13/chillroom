from time import time_ns

from flask import render_template, session
from flask.blueprints import Blueprint

users_bp = Blueprint('users', __name__, url_prefix='/users')

@users_bp.route('/new', methods=['GET'])
def create_temp_user():
    # TODO add docstrings
    session['username'] = f'user_{time_ns()}'
    session['message_count'] = 0

    return render_template('main.html')
