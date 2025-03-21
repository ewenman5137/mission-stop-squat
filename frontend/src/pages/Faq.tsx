import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Panel from "../composant/panel";
import "../assets/faq.css";

interface Question {
  id: number;
  nom: string;
  question: string;
}

function Faq() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const questionsPerPage: number = 6;
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/faq/get_question_admin")
      .then((response) => response.json())
      .then((data: Question[]) => {
        setQuestions(data);
      })
      .catch((error) => console.error("Erreur lors de la récupération des FAQ :", error));
  }, []);

  const handleRepondre = (questionId: number) => {
    navigate(`/faq-reponse/${questionId}`);
    console.log(`Redirection vers la réponse de la question ID: ${questionId}`);
  };

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

  return (
    <>
      <div id="faq">
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
                  <div className="containeur-btn">
                    <button className="btnSup">
                      Supprimer
                    </button>
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
            <button id="btn-next" onClick={nextPage} disabled={indexOfLastQuestion >= questions.length}>
              <img src="/flechePage.svg" alt="Suivant" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
