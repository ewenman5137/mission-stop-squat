import { useNavigate, useLocation } from "react-router-dom";
import "../assets/panel.css";

function Panel() {
    const location = useLocation();
    const navigate = useNavigate();

    // Fonction de déconnexion
    const handleLogout = () => {
        sessionStorage.removeItem("authToken"); // Supprime le token
        navigate("/"); // Redirige vers l'accueil
    };

    return (
        <div id="panel">
            <div id="containeur-retour-logo">
                <button onClick={() => window.history.back()}>
                    <img id="fleche-retour" src="/flechePage.svg" alt="Retour" />
                </button>
                <a href="/">
                    <img id="logo" src="/logo.png" alt="Logo" />
                </a>
            </div>

            <div id="containeur-page">
                <a
                    href="/faq"
                    className={location.pathname === "/faq" ? "page-en-cours" : "page"}
                >
                    <img src="/faq.svg" alt="FAQ" />
                    <p>FAQ</p>
                    <img className="fleche" src="/flechePage.svg" alt=">" />
                </a>

                <a
                    href="/chatbot"
                    className={location.pathname === "/chatbot" ? "page-en-cours" : "page"}
                >
                    <img src="/chat.svg" alt="Chatbot" />
                    <p>Chatbot</p>
                    <img className="fleche" src="/flechePage.svg" alt=">" />
                </a>
            </div>

            <button id="btn-deconnexion" onClick={handleLogout}>
                <img src="/deconnexion.svg" alt="Déconnexion" />
                <p>Déconnexion</p>
            </button>
        </div>
    );
}

export default Panel;
