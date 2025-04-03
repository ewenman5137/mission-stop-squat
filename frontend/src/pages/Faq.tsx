import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Panel from "../composant/panel";
import "../assets/faq.css";
import { Helmet } from 'react-helmet-async';

interface Question {
  id: number;
  nom: string;
  question: string;
  reponse: string | null;
}

function Faq() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const questionsPerPage: number = 6;
  const navigate = useNavigate();

  // Vérification de l'authentification
  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  // Récupération des questions
  useEffect(() => {
    fetch("/api/faq/get_question_admin")
      .then((response) => response.json())
      .then((data: Question[]) => {
        setQuestions(data);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des FAQ :", error)
      );
  }, []);

  // Redirection vers la page de réponse
  const handleRepondre = (questionId: number) => {
    navigate(`/faq-reponse/${questionId}`);
  };

  // Pagination
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

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

  const handleDelete = async (questionId: number) => {
    const confirmDelete = window.confirm("Voulez-vous vraiment supprimer cette question ?");
    if (!confirmDelete) return;
  
    try {
      const response = await fetch(`/api/faq/delete_question/${questionId}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        // Supprimer la question localement
        setQuestions((prevQuestions) => prevQuestions.filter((q) => q.id !== questionId));
      } else {
        const data = await response.json();
        alert(`Erreur : ${data.error || "Impossible de supprimer la question."}`);
      }
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
      alert("Une erreur est survenue lors de la suppression.");
    }
  };
  

  return (
    <div id="faq">
      <Helmet>
            <title>Mission Stop Squat - FAQ</title>
            <meta name="description" content="Vendez votre logement squatté rapidement et légalement avec notre expertise." />
        </Helmet>
      <Panel />
      <div id="containeur-carte-btn">
        <div id="containeur-question">
          {currentQuestions.length > 0 ? (
            currentQuestions.map((question) => (
              <div key={question.id} className="question">
                <p>
                  <strong>Nom :</strong> {question.nom}
                </p>
                <p className="contenu">
                  <strong>Question :</strong>
                  <br /> {question.question}
                </p>
                <p className="etat-reponse">
                  <strong>État :</strong>{" "}
                  {question.reponse && question.reponse.trim() !== "" ? (
                    <span className="repondue">Répondue ✅</span>
                  ) : (
                    <span className="non-repondue">Non répondue ❌</span>
                  )}
                </p>
                <div className="containeur-btn">
                <button className="btn-sup" onClick={() => handleDelete(question.id)}>Supprimer</button>
                  <button className="btn-repondre" onClick={() => handleRepondre(question.id)}>
                    Répondre
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Aucune question disponible.</p>
          )}
        </div>

        <div id="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>
            <img src="/flechePage.svg" alt="Précédent" />
          </button>
          <span>
            Page {currentPage} / {Math.ceil(questions.length / questionsPerPage)}
          </span>
          <button
            id="btn-next"
            onClick={nextPage}
            disabled={indexOfLastQuestion >= questions.length}
          >
            <img src="/flechePage.svg" alt="Suivant" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Faq;
