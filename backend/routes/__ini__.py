from flask import Blueprint, jsonify
from app.services.produit import fetch_products

base = Blueprint('base', __name__)

@base.route('/', methods=['GET'])
def products_():
    
    products = fetch_products()
    if "error" in products:
        return jsonify({"error": products["error"]}), 500
    return jsonify({"products": products}),200
