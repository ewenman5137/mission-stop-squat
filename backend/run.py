from flask import Flask
from flask_cors import CORS
import json
import urllib.request
import urllib.error
from app.models.models import db  
from app.models.produit import Produit 
from app.routes import base
from app.routes.route_order import route_order
from app.routes.route_pay import route_pay

# Initialisation de l'application Flask
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Configuration de la base de données
app.config.from_object('config') 
db.init_app(app) 

# Enregistrement des routes (blueprints)
app.register_blueprint(base)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
