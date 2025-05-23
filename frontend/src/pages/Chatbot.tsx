import { useState, useEffect } from "react";
import Panel from "../composant/panel";
import "../assets/adminChatbot.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

function Chatbot() {
    const [contenu, setContenu] = useState(""); // Stocke le contenu modifiable
    const [originalContenu, setOriginalContenu] = useState(""); // Stocke la version en DB
    const navigate = useNavigate();

    // Vérifie si l'utilisateur est connecté
    useEffect(() => {
        const token = sessionStorage.getItem("authToken"); // Vérifie le token de session

        if (!token) {
            navigate("/login"); // Redirige vers la page de connexion
        } else {
            fetchContenu(); // Charge le contenu si l'utilisateur est authentifié
        }
    }, []);


    // Fonction pour récupérer le contenu du chatbot depuis l'API
    const fetchContenu = () => {
        fetch("/api/chatbot")  
            .then((response) => response.json())
            .then((data) => {
                if (data.contenu) {
                    setContenu(data.contenu);
                    setOriginalContenu(data.contenu); // Stocke la version en DB
                }
            })
            .catch((error) => console.error("Erreur lors de la récupération du contenu :", error));
    };


    useEffect(() => {
        fetchContenu(); // Charge le contenu au démarrage
    }, []);

    // Fonction pour enregistrer les modifications
    const handleSave = () => {
        fetch("/api/chatbot/update", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ contenu }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Réponse du serveur :", data);
            setOriginalContenu(contenu); // Met à jour la version originale
        })
        .catch((error) => console.error("Erreur lors de la mise à jour du contenu :", error));
    };

    // Fonction pour annuler et revenir au texte original
    const handleCancel = () => {
        setContenu(originalContenu); // Remet le texte original depuis la DB
    };

    return (
        <>
        <Helmet>
            <title>Mission Stop Squat - Chatbot</title>
            <meta name="description" content="Vendez votre logement squatté rapidement et légalement avec notre expertise." />
        </Helmet>
        <div id="chatbot-admin">
            <Panel />
            <div id="containeur-info">
                <h2>Savoir du chatbot :</h2>
                <textarea 
                    value={contenu} 
                    onChange={(e) => setContenu(e.target.value)} 
                />
                <div id="containeur-btn-chatbot-admin">
                    <button id="btn-annuler-chatbot" onClick={handleCancel}>Annuler</button>
                    <button id="btn-enregistrer-chatbot" onClick={handleSave}>Enregistrer</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Chatbot;
