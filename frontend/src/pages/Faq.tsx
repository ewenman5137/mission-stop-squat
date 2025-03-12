import { useState, useEffect } from "react";
import Panel from "../composant/panel";
import "../assets/faq.css";

function Faq() {
    const [questions, setQuestions] = useState([]); // Stocker les questions

    // Fonction pour récupérer les questions depuis l'API
    useEffect(() => {
        fetch("http://127.0.0.1:5000/faq/get_question_admin")
            .then((response) => response.json())
            .then((data) => {
                setQuestions(data); // Met à jour l'état avec les questions récupérées
            })
            .catch((error) => console.error("Erreur lors de la récupération des FAQ :", error));
    }, []);

    // Fonction pour supprimer une question
    const handleDelete = (questionId) => {
        fetch(`http://127.0.0.1:5000/faq/delete_question/${questionId}`, {
            method: "DELETE",
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Erreur lors de la suppression");
            }
            return response.json();
        })
        .then(() => {
            // Mettre à jour l'affichage en filtrant la question supprimée
            setQuestions(questions.filter((q) => q.id !== questionId));
        })
        .catch((error) => console.error("Erreur :", error));
    };

    return (
        <>
        <div id="faq">
            <Panel />
            <div id="containeurQuestion">
                {questions.length > 0 ? (
                    questions.map((question) => (
                        <div key={question.id} className="question">
                            <p><strong>Nom :</strong> {question.nom}</p>
                            <p className="contenu"><strong>Question :</strong><br /> {question.question}</p>
                            <div className="containeurBtn">
                                <button className="btnSup" onClick={() => handleDelete(question.id)}>Supprimer</button>
                                <button className="btnRepondre">Répondre</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Aucune question disponible.</p>
                )}
            </div>
        </div>
        </>
    );
}

export default Faq;
