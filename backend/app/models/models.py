from flask_sqlalchemy import SQLAlchemy

# Initialisation de l'objet SQLAlchemy
db = SQLAlchemy()

from .FAQ import FAQ
from .ChatBot import ChatBot 
