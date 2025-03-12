from flask import Flask
from flask_cors import CORS
import json
import urllib.request
import urllib.error
from app.models.models import db  
from app.models.FAQ import FAQ 
from app.models.ChatBot import ChatBot
from app.routes.route_chatbot import chatbot
from app.routes.route_FAQ import faq_bp
from app.routes import base

# Initialisation de l'application Flask
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Configuration de la base de données
app.config.from_object('config') 
db.init_app(app) 

# Enregistrement des routes (blueprints)
app.register_blueprint(base)
app.register_blueprint(chatbot, url_prefix="/chatbot")
app.register_blueprint(faq_bp, url_prefix="/faq")

with app.app_context():
    db.create_all()  # Crée toutes les tables si elles n'existent pas déjà
    ChatBot.insert_default_content()
    FAQ.insert_default_faq()  # Insère les questions FAQ par défaut
    print("DB initialisé")
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
