from app.models.models import db

class ChatBot(db.Model):
    __tablename__ = 'chatbot'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    contenu = db.Column(db.String(10000), nullable=True)

    def __repr__(self):
        return f"<ChatBot {self.id}>"

    @staticmethod
    def insert_default_content():
        """ Ajoute une ligne par défaut si la table est vide """
        if not ChatBot.query.first():  # Vérifie si la table est vide
            default_entry = ChatBot(contenu="Bienvenue dans le chatbot !")
            db.session.add(default_entry)
            db.session.commit()