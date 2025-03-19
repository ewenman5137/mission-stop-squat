import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "../assets/chatbot.css";

const API_KEY = import.meta.env.VITE_API_KEY_CHATBOT;
const BACKEND_URL = import.meta.env.VITE_API_BACKEND; // Remplace par l'URL de ton backend

const fetchChatbotContent = async () => {
    try {
        const response = await fetch(`${BACKEND_URL}`);
        const data = await response.json();
        return data.contenu || "Tu es un assistant spécialisé pour aider les clients à mieux comprendre l'entreprise Mission-Stop-Squat. L'objectif de Mission-Stop-Squat est de racheter des biens immobiliers occupés illégalement par des squatteurs ou des locataires qui ne paient plus leur loyer. Notre entreprise propose une solution rapide et sécurisée pour aider les propriétaires à récupérer leur bien en rachetant la propriété et en prenant en charge les démarches pour déloger les occupants illégaux. Ton rôle : Expliquer le fonctionnement de l'entreprise et les étapes du rachat. Conseiller les clients sur l'importance de remplir le formulaire de contact afin qu’un spécialiste puisse les recontacter par e-mail. Répondre uniquement aux questions en lien avec le squat, les loyers impayés et les services de Mission-Stop-Squat. Restrictions : ❌ Si une question ne concerne pas ces sujets, réponds : 'Je ne suis pas en mesure de répondre à cette question. Si vous estimez qu’elle est importante, vous pouvez la poser dans la FAQ en bas de cette page."; 
    } catch (error) {
        console.error("Erreur lors de la récupération du texte du chatbot:", error);
        return "Erreur de chargement du contenu du chatbot.";
    }
};
const fetchOpenAIResponse = async (messages: { sender: string; text: string }[], systemMessage: string) => {
    console.log(systemMessage);
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-4o",
                messages: [
                    { role: "system", content: systemMessage }, // Utilise le texte de la BDD
                    ...messages.map((msg) => ({
                        role: msg.sender === "user" ? "user" : "assistant",
                        content: msg.text,
                    })),
                ],
                max_tokens: 500,
            }),
        });

        const data = await response.json();
        return data.choices?.[0]?.message?.content || "Erreur de réponse";
    } catch (error) {
        console.error("Erreur API:", error);
        return "Erreur de connexion à OpenAI.";
    }
};

function ChatBot() {
    const [afficheChatBot, setAfficheChatBot] = useState(false);
    const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
    const [inputMessage, setInputMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [systemMessage, setSystemMessage] = useState("");

    // Charger le texte du chatbot au démarrage
    useEffect(() => {
        const loadChatbotContent = async () => {
            const content = await fetchChatbotContent();
            setSystemMessage(content);
        };
        loadChatbotContent();
    }, []);

    const envoyerMessage = async () => {
        if (!inputMessage.trim() || loading) return;

        const newMessages = [...messages, { sender: "user", text: inputMessage }];
        setMessages(newMessages);
        setInputMessage("");
        setLoading(true);

        const botResponse = await fetchOpenAIResponse(newMessages, systemMessage);

        setMessages([...newMessages, { sender: "bot", text: botResponse }]);
        setLoading(false);
    };

    return (
        <div id="chatbot">
            {afficheChatBot ? (
                <div id="containeur-chatbot">
                    <button id="fermer-chatbot" onClick={() => setAfficheChatBot(false)}>✖</button>
                    <div id="messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={msg.sender === "user" ? "message-utilisateur" : "message-chatbot"}>
                                <ReactMarkdown>{msg.text}</ReactMarkdown>
                            </div>
                        ))}
                        {loading && <div className="message-chatbot">⏳ Réponse en cours...</div>}
                    </div>
                    <div id="containeur-message-utilisateur">
                        <textarea
                            name="message-utilisateur"
                            id="message-utilisateur"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            placeholder="Écrivez un message..."
                        ></textarea>
                        <button id="envoyer-message" onClick={envoyerMessage} disabled={loading}>
                            <img src="/send.svg" alt="Envoyer" />
                        </button>
                    </div>
                </div>
            ) : (
                <button id="bouton-chatbot" onClick={() => setAfficheChatBot(true)}>?</button>
            )}
        </div>
    );
}

export default ChatBot;
