import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Panel from "../composant/panel";
import "../assets/faq.css";

function Faq() {
    const [questions, setQuestions] = useState([]); // Stocker les questions
    const [currentPage, setCurrentPage] = useState(1); // Gère la page actuelle
    const questionsPerPage = 6; // Nombre de questions affichées par page
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

    
    // Fonction pour récupérer les questions depuis l'API
    useEffect(() => {
        fetch("http://127.0.0.1:5000/faq/get_question_admin")
            .then((response) => response.json())
            .then((data) => {
                setQuestions(data);
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
            setQuestions(questions.filter((q) => q.id !== questionId));
        })
        .catch((error) => console.error("Erreur :", error));
    };

    // Fonction pour rediriger vers la page de réponse
    const handleRepondre = (questionId) => {
        navigate(`/faqReponse/${questionId}`);
    };

    // Calcul de l'index des questions affichées sur la page actuelle
    const indexOfLastQuestion = currentPage * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
    const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

    // Fonction pour changer de page
    const nextPage = () => {
        if (indexOfLastQuestion < questions.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
        <div id="faq">
            <Panel />
            <div id="containeurCarteBtn">
                <div id="containeurQuestion">
                    {currentQuestions.length > 0 ? (
                        currentQuestions.map((question) => (
                            <div key={question.id} className="question">
                                <p><strong>Nom :</strong> {question.nom}</p>
                                <p className="contenu"><strong>Question :</strong><br /> {question.question}</p>
                                <div className="containeurBtn">
                                    <button className="btnSup" onClick={() => handleDelete(question.id)}>Supprimer</button>
                                    <button className="btnRepondre" onClick={() => handleRepondre(question.id)}>Répondre</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Aucune question disponible.</p>
                    )}
                    
                </div>
                {/* Pagination */}
                <div id="pagination">
                    <button onClick={prevPage} disabled={currentPage === 1}><img src="/flechePage.svg" alt="" /></button>
                    <span>Page {currentPage} / {Math.ceil(questions.length / questionsPerPage)}</span>
                    <button id="btnNext" onClick={nextPage} disabled={indexOfLastQuestion >= questions.length}><img src="/flechePage.svg" alt="" /></button>
                </div>
            </div>
            
        </div>
        </>
    );
}

export default Faq;
function fetchContenu() {
    throw new Error("Function not implemented.");
}

