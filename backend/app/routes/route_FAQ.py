from flask import Blueprint, jsonify, request
from app.models.models import db
from app.models.FAQ import FAQ

faq_bp = Blueprint('faq_bp', __name__)

@faq_bp.route('/get_question', methods=['GET'])
def get_questions():
    """ Retourne toutes les questions visibles de la FAQ """
    faqs = FAQ.query.filter_by(etat=True).all()  # Ne récupère que les questions dont etat=True
    result = [{"id": faq.id, "nom": faq.nom, "question": faq.question, "reponse": faq.reponse} for faq in faqs]
    
    return jsonify(result), 200

@faq_bp.route('/get_question_admin', methods=['GET'])
def get_questions_admin():
    """ Retourne toutes les questions (admin, incluant celles en attente) """
    faqs = FAQ.query.all()  # Récupère toutes les questions
    result = [{"id": faq.id, "nom": faq.nom, "question": faq.question, "reponse": faq.reponse, "etat": faq.etat} for faq in faqs]
    
    return jsonify(result), 200



@faq_bp.route('/add_question', methods=['POST'])
def add_question():
    """ Ajoute une nouvelle question à la FAQ """
    data = request.get_json()

    # Vérification des champs requis
    if not data or "nom" not in data or "question" not in data or "reponse" not in data:
        return jsonify({"error": "Les champs 'nom', 'question' et 'reponse' sont requis"}), 400

    # Création d'un nouvel enregistrement avec etat=False (question en attente de validation)
    new_faq = FAQ(nom=data["nom"], question=data["question"], reponse=data["reponse"], etat=False)
    db.session.add(new_faq)
    db.session.commit()

    return jsonify({"message": "Question ajoutée et en attente de validation", "id": new_faq.id}), 201


@faq_bp.route('/update_full_question/<int:question_id>', methods=['PUT'])
def update_full_question(question_id):
    """ Met à jour tous les champs d'une question et valide l'affichage (etat=True) """
    faq = FAQ.query.get(question_id)

    if not faq:
        return jsonify({"error": "Question introuvable"}), 404

    data = request.get_json()
    
    # Vérification que tous les champs existent dans la requête
    if "nom" not in data or "question" not in data or "reponse" not in data:
        return jsonify({"error": "Les champs 'nom', 'question' et 'reponse' sont requis"}), 400

    # Mise à jour des champs
    faq.nom = data["nom"]
    faq.question = data["question"]
    faq.reponse = data["reponse"]
    faq.etat = True  # Met automatiquement la question en état "visible"

    db.session.commit()

    return jsonify({"message": f"Question {question_id} mise à jour et validée avec succès", "etat": faq.etat}), 200


@faq_bp.route('/delete_question/<int:question_id>', methods=['DELETE'])
def delete_question(question_id):
    """ Supprime une question de la FAQ """
    faq = FAQ.query.get(question_id)

    if not faq:
        return jsonify({"error": "Question introuvable"}), 404

    db.session.delete(faq)
    db.session.commit()

    return jsonify({"message": f"Question {question_id} supprimée avec succès"}), 200
