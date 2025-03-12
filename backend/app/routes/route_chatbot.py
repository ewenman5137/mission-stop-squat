from flask import Blueprint, jsonify
from app.models.models import db
from app.models.ChatBot import ChatBot

chatbot = Blueprint('chatbot', __name__)

@chatbot.route('', methods=['GET'])
def get_contenu():    
    # Récupère tous les contenus stockés dans la table ChatBot
    contenus = ChatBot.query.all()
    
    # Convertit les objets SQLAlchemy en dictionnaires JSON
    result = [{"id": c.id, "contenu": c.contenu} for c in contenus]

    return jsonify(result), 200
