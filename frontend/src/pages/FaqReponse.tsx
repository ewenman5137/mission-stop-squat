import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Panel from "../composant/panel";
import "../assets/faqReponse.css";

// Définition du type pour une question
interface Question {
    id: number;
    nom: string;
    question: string;
    reponse: string;
}

function FaqReponse() {
    const { id } = useParams<{ id: string }>(); // Récupère l'ID de la question depuis l'URL
    const navigate = useNavigate();
    const [questionData, setQuestionData] = useState<Question | null>(null);

    // Récupérer les détails de la question
    useEffect(() => {
        fetch(`http://127.0.0.1:5000/faq/get_question_admin`)
            .then((response) => response.json())
            .then((data: Question[]) => {
                const selectedQuestion = data.find(q => q.id === parseInt(id!));
                if (selectedQuestion) {
                    setQuestionData(selectedQuestion);
                }
            })
            .catch((error) => console.error("Erreur lors de la récupération de la question :", error));
    }, [id]);

    // Fonction pour gérer la modification des champs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (questionData) {
            setQuestionData({ ...questionData, [e.target.name]: e.target.value });
        }
    };

    // Fonction pour enregistrer la modification
    const handleSave = () => {
        fetch(`http://127.0.0.1:5000/faq/update_full_question/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(questionData),
        })
        .then((response) => response.json())
        .then(() => {
            navigate("/faq"); // Redirige vers la page FAQ après l'enregistrement
        })
        .catch((error) => console.error("Erreur lors de l'enregistrement de la réponse :", error));
    };

    return (
        <>
        <div id="faqReponse">
            <Panel />
            <div id="containeurReponse">
                {questionData ? (
                    <>
                        <h2>Modifier la question</h2>
                        <label><strong>Nom :</strong></label>
                        <input 
                            type="text" 
                            name="nom" 
                            value={questionData.nom} 
                            onChange={handleChange} 
                        />

                        <label><strong>Question :</strong></label>
                        <textarea 
                            name="question" 
                            value={questionData.question} 
                            onChange={handleChange} 
                        />

                        <label><strong>Réponse :</strong></label>
                        <textarea 
                            name="reponse" 
                            value={questionData.reponse} 
                            onChange={handleChange} 
                            placeholder="Écrire une réponse..."
                        />
                        
                        <div id="containeurBtn">
                            <button id="btnEnregistrer" onClick={handleSave}>Poster</button>
                        </div>
                    </>
                ) : (
                    <p>Chargement...</p>
                )}
            </div>
        </div>
        </>
    );
}

export default FaqReponse;
