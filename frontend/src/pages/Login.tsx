import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Fonction pour gérer la connexion
    const handleLogin = () => {
        fetch("https://mission-stop-squat.onrender.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.token) {
                sessionStorage.setItem("authToken", data.token); // Stocke le token en session
                navigate("/chatbot"); // Redirige vers la page Chatbot
            } else {
                alert("Identifiants incorrects !");
            }
        })
        .catch((error) => console.error("Erreur lors de la connexion :", error));
    };

    return (
        <div id="login">
            <img src="/login.jpg" alt="" />
            <div id="containeurContaineur">
                <div id="containeurFormulaire">
                    <h1>Connexion</h1>
                    <input type="text" placeholder="Nom d'utilisateur" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleLogin}>Se connecter</button>
                    <a href="/">Cette page n'est pas destiner au utilisateur cliquer ici pour retourner à l'accueil</a>
                </div>
            </div>
        </div>
    );
}

export default Login;
