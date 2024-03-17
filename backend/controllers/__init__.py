from glob import glob
from importlib import import_module
from os import getcwd, getenv
from os.path import basename, join

from flask import Flask

def register_endpoints(flask_app: Flask) -> None:
    """Get all the modules in the controllers package and register the
    routes using the blueprint of each one.

    In order for a module to be dectectable by this function it must not have
    "__" prefixed and it's internal blueprint must have the same name as the
    module with a "_bp" prefix.

    Arguments:
        flask_app: An instance of the current active Flask app.

        version_prefix: A valid flask route string of the backend current
        version.

    Returns:
        Nothing.
    """
    if getenv('FLASK_DEBUG'):
        controllers = 'controllers/*.py'
    else:
        controllers = join(getcwd(), 'chillroom/backend/controllers/*.py')

    for module_path in glob(controllers):
        module_name = basename(module_path).removesuffix('.py')

        # Skip __init__ module
        if module_name.startswith('__'):
            continue

        module = import_module(f'controllers.{module_name}')

        # All Flask blueprints in this project are named following this
        # convention: {module name}+_bp
        blueprint = getattr(module, f'{module_name}_bp')

        flask_app.register_blueprint(blueprint)