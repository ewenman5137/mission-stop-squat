from flask import Flask
from flask_cors import CORS
from flask_mail import Mail
from dotenv import load_dotenv
import json
import urllib.request
import urllib.error

from config import Config
from app.models.models import db  
from app.models.FAQ import FAQ 
from app.models.ChatBot import ChatBot
from app.routes.route_chatbot import chatbot
from app.routes.route_FAQ import faq_bp
#from app.routes.route_contact import route_contact
from app.routes.route_auth import auth_bp
from app.routes import base
from app.services import mdp


# 🔄 Charger les variables d'env
load_dotenv()

# ✅ Initialisation Flask
app = Flask(__name__)
app.config.from_object(Config)
CORS(app, resources={r"/*": {"origins": "*"}})

# ✅ Initialisation de Flask-Mail
mail = Mail(app)
mdp.mail = mail  # Injection manuelle dans ton fichier mdp.py

# ✅ Initialisation de la base de données
db.init_app(app)

# ✅ Enregistrement des routes
app.register_blueprint(base)
app.register_blueprint(chatbot, url_prefix="/chatbot")
app.register_blueprint(faq_bp, url_prefix="/faq")
app.register_blueprint(auth_bp, url_prefix="/auth/")
#app.register_blueprint(route_contact)


# ✅ Création des tables + contenu par défaut
with app.app_context():
    db.create_all()
    ChatBot.insert_default_content()
    FAQ.insert_default_faq()
    print("DB initialisée")

# ✅ Lancement de l'app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
