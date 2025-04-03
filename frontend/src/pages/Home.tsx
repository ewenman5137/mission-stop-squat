import { useEffect, useState } from "react";
import "../assets/home.css"
import FAQAccordion from "../composant/FAQAccordion";
import Chatbot from "../composant/ChatBot";
import "react-phone-input-2/lib/style.css";


  
function Home() {    
    const [faqData, setFaqData] = useState([]); // État pour stocker les questions
    const [showPopup, setShowPopup] = useState(false);
    const [nomFAQ, setNomFAQ] = useState("");
    const [question, setQuestion] = useState("");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [emailSent, setEmailSent] = useState(false);
    const [emailError, setEmailError] = useState(false);


    // Fonction pour récupérer les questions depuis l'API
    useEffect(() => {
        fetch("http://api/faq/get_question") // URL de ton API Flask
            .then((response) => response.json()) // Convertir en JSON
            .then((data) => {
                console.log("Données FAQ reçues :", data); // Debug dans la console
                setFaqData(data); // Mettre à jour l'état avec les questions reçues
            })
            .catch((error) => console.error("Erreur lors de la récupération des FAQ :", error));
    }, []);

    const envoyerQuestion = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!nomFAQ || !question) {
            setMessage("Veuillez remplir tous les champs !");
            return;
        }
    
        const requestData = { nom: nomFAQ, question, reponse: "" };
    
        try {
            const response = await fetch("http://api/faq/add_question", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestData),
            });
    
            if (response.ok) {
                setMessage("✅ Question envoyée avec succès !");
                setNomFAQ("");
                setQuestion("");
            } else {
                setMessage("❌ Erreur lors de l'envoi de la question !");
            }
        } catch (error) {
            console.error("Erreur :", error);
            setMessage("❌ Une erreur est survenue.");
        }
    };
    

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector(".about-section");
            if (section) {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (sectionTop < windowHeight - 100) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Vérifie au chargement

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [isVisibleValue, setIsVisibleValue] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector(".valeurs-section");
            if (section) {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (sectionTop < windowHeight - 100) {
                    setIsVisibleValue(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Vérifie au chargement

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [isVisibleFAQ, setIsVisibleFAQ] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector("#containeur-faq");
            if (section) {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (sectionTop < windowHeight - 100) {
                    setIsVisibleFAQ(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Vérifie au chargement

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);
        setEmailSent(false);
        setEmailError(false);
    
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
    
        try {
            const response = await fetch("http://api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
    
            if (response.ok) {
                setEmailSent(true);
                form.reset(); // Nettoie le formulaire
            } else {
                setEmailError(true);
            }
        } catch (error) {
            console.error(error);
            setEmailError(true);
        } finally {
            setIsSending(false);
        }
    };
    

      useEffect(() => {
        if (emailSent || emailError) {
          const timer = setTimeout(() => {
            setEmailSent(false);
            setEmailError(false);
          }, 3000);
          return () => clearTimeout(timer);
        }
      }, [emailSent, emailError]);
      
      
    return (
        <>
        <div>
            <div id="containeur-nav">
                <nav>
                    <div id="bloc-gauche">
                        <img src="/logo.png" alt="" />
                    </div>
                    <div id="bloc-droit">
                        <a href="#home">Home</a>
                        <a href="#a-propos">Qui sommes nous ?</a>
                        <a href="#nos-valeurs">Nos valeurs</a>
                    </div>
                </nav>
            </div>
            <div id="header">
                <div id="home">
                    <h1>Votre logement est squatté ?</h1>
                    <p>Nous avons la solution.</p>
                    <div id="containeur-button">
                        <a href="#contact-form" className="btn-home" id="contactez-nous">Contactez-nous</a>
                        <a href="#contact-form" className="btn-home" id="en-savoir">En savoir +</a>
                    </div>
                </div>
            </div>
            <Chatbot/>
            <div id="containeur-info-formulaire">
                <div id="containeur-explication">
                    <div>
                        <h2>Mission Stop Squat achète votre bien squatté tel quel, avec les occupants.</h2>
                        <p id="description-explication">Les propriétaires de résidences squattées sont démunis face à des procédures d’expulsion complexes et longues. De plus, les dégradations subies entraînent des frais souvent difficiles à assumer.</p>
                    </div>
                    <div id="containeur-comment-cela-fonctionne">
                        <h2>Comment cela fonctionne ?</h2>
                        <div className="etape">
                            <p className="chiffre">1</p>
                            <p className="info-chiffre">Remplissez le formulaire avec vos informations personnelles et les détails du bien.</p>
                        </div>
                        <div className="etape">
                            <p className="chiffre">2</p>
                            <p className="info-chiffre">Nos experts vous contacteront bientôt pour plus d’informations et de détails sur le bien.</p>
                        </div>
                        <div className="etape">
                            <p className="chiffre">3</p>
                            <p className="info-chiffre">Sous 5 jours ouvrés, une proposition d’achat chiffrée vous sera communiquée. À défaut, nous vous indiquerons notre refus d’achat de votre bien.</p>
                        </div>
                    </div>
                </div>
                <div id="contact-form">
                    <h2>Contactez-nous</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Nom</label>
                        <input name="nom" type="text" placeholder="Votre nom" required />
                        <label>Prénom</label>
                        <input name="prenom" type="text" placeholder="Votre prénom" required />
                        <label>Numéro de téléphone</label>
                        <input name="telephone" type="text" placeholder="Ex : 0672838393" required />
                        <label>Email</label>
                        <input name="email" type="email" placeholder="Votre email" required />
                        <label>Adresse de votre bien</label>
                        <input name="adresse" type="text" placeholder="Votre adresse" required />
                        <label>Décrivez votre problème</label>
                        <textarea name="message" placeholder="Votre message" required></textarea>
                        <div className="checkbox-container">
                            <input name="rgpd" type="checkbox" required />
                            <span>J'accepte la politique de confidentialité</span>
                        </div>
                        <button type="submit" disabled={isSending}>
                            {isSending ? "📨 Envoi..." : emailSent ? "✅ Envoyé !" : "Envoyer"}
                        </button>
                    </form>
                </div>
            </div>
            
            <section id="a-propos" className={`about-section ${isVisible ? "visible" : ""}`}>
                <div className="about-text">
                    <h2>À propos</h2>
                    <p>Notre société est spécialisée dans l’acquisition de biens immobiliers complexes : <br /><br /> Logements squattés, locataires en impayés, biens marqués par un drame ou en indivision conflictuelle. Forts de notre expertise en droit immobilier, en procédures contentieuses et amiables, ainsi qu’en rénovation.<br /><br /> Nous offrons une solution rapide et sécurisée aux vendeurs. Grâce à nos fonds propres, nous achetons comptant, sans condition suspensive, garantissant une transaction fluide et sans risque.<br /><br /> Notre approche allie maîtrise juridique et savoir-faire technique, nous permettant de valoriser ces biens et de leur redonner un second souffle.</p>
                </div>

                <div className="about-values">
                    <div className="about-value">
                        <div className="value-icon">
                            <img src="loupe.png" alt="Recherche"/>
                        </div>
                        <div className="value-text">
                            <h3>Analyse juridique et faisabilité</h3>
                            <p>Nous examinons la situation du bien : titre de propriété, occupation sans droit ni titre, existence d’une procédure d’expulsion en cours ou à engager. Cette étape permet d’évaluer les risques et les délais nécessaires pour récupérer la pleine possession du bien.</p>
                        </div>
                    </div>

                    <div className="about-value">
                        <div className="value-icon">
                            <img src="buy-home.png" alt="Stratégie"/>
                        </div>
                        <div className="value-text">
                            <h3>Achat rapide et sécurisé</h3>
                            <p>Grâce à nos fonds propres, nous achetons comptant et sans condition suspensive. Cette rapidité évite aux vendeurs d’engager de nouvelles procédures coûteuses et incertaines. La vente peut être finalisée en quelques semaines chez le notaire.</p>
                        </div>
                    </div>

                    <div className="about-value">
                        <div className="value-icon">
                            <img src="signature.png" alt="Conception"/>
                        </div>
                        <div className="value-text">
                            <h3>Gestion et libération du bien</h3>
                            <p>Après l’achat, nous prenons en charge l’expulsion si nécessaire, en respectant les procédures légales. Nous sécurisons ensuite le bien et engageons les travaux de rénovation pour le remettre sur le marché.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className={`valeurs-section ${isVisibleValue ? "visible" : ""}`} id="nos-valeurs">
                <h2 className="valeurs-title">
                    Nous rachetons votre bien squatté <br />
                    avec des solutions <span className="highlight">fiables, humaines et sereines.</span>
                </h2>

                <div className="valeurs-container">
                    {[
                        { icon: "verified.png", title: "Solution fiable", text: "Nous mettons en place des solutions éprouvées, basées sur une expertise juridique solide et une parfaite connaissance des procédures en vigueur." },
                        { icon: "partnership.png", title: "Solution humaine", text: "Chaque situation de squat est unique, et nous l’abordons avec discernement et empathie. Nous privilégions le dialogue et la médiation pour une solution respectueuse." },
                        { icon: "argent.png", title: "Solution équitable", text: "Nous évaluons chaque bien squatté objectivement, en tenant compte de sa valeur réelle et de sa situation juridique. Nos offres sont transparentes et adaptées." },
                        { icon: "flash.png", title: "Solution rapide", text: "Le temps est clé face à l’occupation illégale. Grâce à nos procédures optimisées et notre réseau d’experts, nous intervenons rapidement pour vous libérer." },
                        { icon: "security.png", title: "Solution sûre", text: "Nous opérons exclusivement dans le cadre légal avec l’appui de juristes et de professionnels spécialisés. Vous êtes assuré d’une transaction sécurisée et sans risques." },
                        { icon: "lotus.png", title: "Solution sereine", text: "Face aux démarches administratives complexes et aux incertitudes liées à l’occupation illégale, nous prenons tout en charge pour vous." },
                    ].map((valeur, index) => (
                        <div className="valeur" key={index}>
                            <div className="valeur-icon-container">
                                <img src={valeur.icon} alt="check" className="valeur-icon" />
                            </div>
                            <div>
                                <h3>{valeur.title}</h3>
                                <p>{valeur.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div id="containeur-faq" className={isVisibleFAQ ? "visible" : ""}>
                <div id="faq-home">
                    <h1>Vos questions fréquentes</h1>
                    <FAQAccordion data={faqData} />
                    <button className="btn-faq-popup" onClick={() => setShowPopup(true)}>Posez votre question</button>
                    {showPopup && (
                        <div className="popup-overlay">
                            <div className="popup-form">
                                <button className="close-btn-faq" onClick={() => setShowPopup(false)}>✖</button>
                                <h2>Posez votre question</h2>
                                <form onSubmit={envoyerQuestion}>
                                    <label>Nom</label>
                                    <input type="text" value={nomFAQ} onChange={(e) => setNomFAQ(e.target.value)} placeholder="Votre nom" />
                                    <label>Votre question</label>
                                    <textarea value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Écrivez votre question ici..." />
                                    <button type="submit">Envoyer</button>
                                    {message && <p className="popup-message">{message}</p>}
                                </form>
                            </div>
                        </div>
                    )}
                </div>
                <img src="login.jpg" alt="" />
            </div>
            <footer>
                <div className="footer-title">Mission Stop Squat</div>

                <div className="footer-links">
                    <a href="#home">Home</a>
                    <a href="#a-propos">Qui somme-nous ?</a>
                    <a href="#nos-valeurs">Nos valeurs</a>
                </div>

                <div className="footer-social">
                    <a href="#"><img src="facebook.png" alt="Facebook" /></a>
                    <a href="#"><img src="whatsapp.png" alt="Twitter" /></a>
                    <a href="#"><img src="instagram.png" alt="Instagram" /></a>
                </div>

                <div className="footer-bottom">
                    <p>© 2025 Mission Stop Squat <a href="#">MissionStopSquat.com</a></p>
                </div>
            </footer>

        </div>
        </>
    );
}

export default Home;