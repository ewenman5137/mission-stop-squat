# Mission Stop Squat

Une application web full-stack pour accompagner les victimes de squat via un chatbot, une FAQ dynamique et un formulaire de contact par email.

---

## Table des matières

- [Fonctionnalités](#fonctionnalités)  
- [Stack technique](#stack-technique)  
- [Arborescence](#arborescence)  
- [Prérequis](#prérequis)  
- [Installation](#installation)  
  - [Avec Docker](#avec-docker)  
  - [Sans Docker](#sans-docker)  
- [Configuration](#configuration)  
- [Usage](#usage)  
- [Contribution](#contribution)  
- [Licence](#licence)  

---

## Fonctionnalités

- 🤖 Chatbot d’aide aux victimes de squat  
- 📚 FAQ consultable et éditable  
- ✉️ Formulaire de contact (envoi d’email)  
- 🔒 Authentification JWT  
- 🚀 Déploiement via Docker + Nginx  

---

## Stack technique

- **Backend** : Python 3.10, Flask, SQLAlchemy, Flask-Mail  
- **Base de données** : SQLite  
- **Frontend** : React, TypeScript, Vite  
- **Conteneurs** : Docker & Docker Compose  
- **Proxy** : Nginx  

---

## Arborescence

- **mission-stop-squat/**
  - **backend/**
    - **app/**
      - **models/**  
        Modèles SQLAlchemy (FAQ, Chatbot, …)
      - **routes/**  
        Blueprints Flask (auth, faq, chatbot, contact)
    - `config.py`  
      Configuration Flask & Mail
    - `run.py`  
      Point d’entrée de l’API
    - `requirements.txt`  
      Dépendances Python
  - **frontend/**
    - **public/**  
      Assets & CSS
    - **src/**
      - **composants/**  
        ChatBot, FAQAccordion, etc.
      - **pages/**  
        Home, FAQ, ChatBot, Login, …
    - `package.json`  
      Dépendances JS
    - `vite.config.ts`  
      Configuration Vite
  - **nginx/**
    - `nginx.conf`  
      Reverse-proxy Nginx
  - `docker-compose.yml`  
    Dev : backend + frontend + proxy
  - `docker-compose.prod.yml`  
    Prod : images optimisées
  - `.gitignore`

---

## Prérequis

- Docker & Docker Compose  
- (Optionnel) Python 3.10, Node.js 18+  

---

## Installation

### Avec Docker

1. Cloner le dépôt  
   ```bash
   git clone https://github.com/ewenman5137/mission-stop-squat.git
   cd mission-stop-squat

2. Copier et renseigner les fichiers d’environnement :

backend/.env

frontend/.env

3. Lancer la stack :

docker-compose up --build

4.Accéder à http://localhost

### Sans Docker

Backend

cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env    # renseigner MAIL_USERNAME, MAIL_PASSWORD…
python run.py

API disponible sur http://localhost:5000/api.

Frontend


cd frontend
npm install
cp .env.example .env    # renseigner VITE_API_URL=http://localhost:5000
npm run dev
Frontend disponible sur http://localhost:5173.

### Configuration

backend/.env
dotenv

MAIL_USERNAME=youremail@gmail.com
MAIL_PASSWORD=your_app_password
MAIL_DEFAULT_SENDER="Mission Stop Squat <youremail@gmail.com>"

frontend/.env
dotenv

VITE_API_URL=http://localhost:5000

Usage
Chatbot : poser vos questions via l’interface.

## Routes principales

- **Authentification**
  - `POST /api/auth/register`
  - `POST /api/auth/login` (retourne un JWT)

- **FAQ**
  - `GET  /api/faq`
  - `POST /api/faq`

- **Chatbot**
  - `GET  /api/chatbot`
  - `POST /api/chatbot/respond`

- **Contact**
  - `POST /api/contact`

---

## Contribution

1. Forkez ce dépôt  
2. Créez une branche `feature/ma-fonctionnalité`  
3. Codez, testez et validez vos changements  
4. Ouvrez une Pull Request vers la branche `main`

Licence
MIT © ewenman5137
