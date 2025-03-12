from app.models.models import db

class FAQ(db.Model):
    __tablename__ = 'faq'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nom = db.Column(db.String(50), nullable=True)
    question = db.Column(db.String(1000), nullable=True)
    reponse = db.Column(db.String(1000), nullable=True)
    etat = db.Column(db.Boolean, default=True)  # True = affichable, False = masqué

    def __repr__(self):
        return f"<FAQ {self.id} - Nom {self.nom} - Etat {self.etat}>"

    @staticmethod
    def insert_default_faq():
        """ Ajoute des questions par défaut si la table est vide """
        faq_data = [
            {"nom": "Jean", "question": "Qu’est-ce qu’un squat de maison ?", "reponse": "Un squat est l'occupation d'un logement sans autorisation du propriétaire.", "etat": True},
            {"nom": "Marion", "question": "Le droit de propriété", "reponse": "Le droit de propriété est protégé par la loi et permet de disposer librement de son bien.", "etat": True},
            {"nom": "Pierre", "question": "Le droit au logement", "reponse": "Le droit au logement est réaffirmé par la loi Besson du 31 mai 1990...", "etat": True}
        ]

        if not FAQ.query.first():  # Vérifie si la table est vide
            print("✅ Table FAQ vide, insertion des questions par défaut...")
            for faq in faq_data:
                new_faq = FAQ(nom=faq["nom"], question=faq["question"], reponse=faq["reponse"], etat=faq["etat"])
                db.session.add(new_faq)
            db.session.commit()
            print("✅ Questions insérées avec succès !")
        else:
            print("⚠️ La table FAQ contient déjà des données, aucune insertion nécessaire.")
