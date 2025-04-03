# app/routes/route_contact.py
from flask import Blueprint, request, jsonify
from flask_mail import Message
from app.services import mdp

route_contact = Blueprint('route_contact', __name__)

@route_contact.route('/send-email', methods=['POST'])
def send_email():
    data = request.json

    try:
        msg = Message(
            subject="Nouveau message de contact",
            sender=data["email"],  # l'adresse de l'expéditeur
            recipients=["ton_adresse@gmail.com"],  # ton adresse perso
            body=f"""
Nom : {data['nom']}
Prénom : {data['prenom']}
Téléphone : {data['telephone']}
Email : {data['email']}
Adresse du bien : {data['adresse']}
Message : {data['message']}
RGPD accepté : {"Oui" if data.get('rgpd') else "Non"}
            """
        )
        mdp.mail.send(msg)
        return jsonify({"message": "Email envoyé"}), 200
    except Exception as e:
        print(f"Erreur d'envoi de mail : {e}")
        return jsonify({"error": "Erreur d'envoi de mail"}), 500
