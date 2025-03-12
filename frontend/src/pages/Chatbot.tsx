import { useState, useEffect } from "react";
import Panel from "../composant/panel";
import "../assets/chatbot.css";

function Chatbot() {
    const [contenu, setContenu] = useState(""); // Stocke le contenu du chatbot

    // Fonction pour récupérer le contenu du chatbot depuis l'API
    useEffect(() => {
        fetch("http://127.0.0.1:5000/chatbot")  // API Flask pour récupérer le contenu
            .then((response) => response.json())
            .then((data) => {
                if (data.length > 0) {
                    setContenu(data[0].contenu); // Prendre le premier élément
                }
            })
            .catch((error) => console.error("Erreur lors de la récupération du contenu :", error));
    }, []);

    return (
        <>
        <div id="chatbot">
            <Panel />
            <div id="containeurInfo">
                <h2>Savoir du chatbot :</h2>
                <textarea 
                    value={contenu} 
                    onChange={(e) => setContenu(e.target.value)} 
                />
                <div id="containeurBtn">
                    <button id="btnAnnuler">Annuler</button>
                    <button id="btnEnregistrer">Enregistrer</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Chatbot;
