from flask import Blueprint, jsonify, request
from app.models.models import db
from app.models.ChatBot import ChatBot

chatbot = Blueprint('chatbot', __name__)

@chatbot.route('', methods=['GET'])
def get_contenu():
    """ Récupère le contenu actuel du chatbot """
    contenu = ChatBot.query.first()
    if contenu:
        return jsonify({"id": contenu.id, "contenu": contenu.contenu}), 200
    return jsonify({"error": "Aucun contenu trouvé"}), 404

@chatbot.route('/update', methods=['PUT'])
def update_contenu():
    """ Met à jour le contenu du chatbot """
    data = request.get_json()
    
    if "contenu" not in data:
        return jsonify({"error": "Le champ 'contenu' est requis"}), 400
    
    chatbot_entry = ChatBot.query.first()
    
    if not chatbot_entry:
        return jsonify({"error": "Aucune entrée trouvée"}), 404

    chatbot_entry.contenu = data["contenu"]
    db.session.commit()
    
    return jsonify({"message": "Contenu mis à jour avec succès"}), 200
