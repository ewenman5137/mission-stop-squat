import { useState } from "react";
import "../assets/home.css"
import FAQAccordion from "../composant/FAQAccordion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const faqData = [
    { question: "Qu’est-ce qu’un squat de maison ?", answer: "Un squat est l'occupation d'un logement sans autorisation du propriétaire." },
    { question: "Le droit de propriété", answer: "Le droit de propriété est protégé par la loi et permet de disposer librement de son bien." },
    { question: "Le droit au logement", answer: "Le droit au logement est réaffirmé par la loi Besson du 31 mai 1990..." }
  ];
  
function Home() {    
    const [phone, setPhone] = useState("");
    return (
        <>
        <div>
            <div id="containeurNav">
                <nav>
                    <div id="blocGauche">
                        <img src="/logo.png" alt="" />
                        <h1>Mission Stop Squat</h1>
                    </div>
                    <div id="blocDroit">
                        <a href="#home">Home</a>
                        <a href="#quiSommeNous">Qui sommes nous ?</a>
                        <a href="#notreSolution">Notre solution</a>
                        <a href="#nosValeurs">Nos valeurs</a>
                    </div>
                </nav>
            </div>
            <div id="header">
                <div id="home">
                    <h1>Votre logement est squatté ?</h1>
                    <p>Nous avons la solution.</p>
                    <div id="containeurButton">
                        <a href="#formulaireContact" id="contactezNous">Contactez-nous</a>
                        <a href="#formulaireContact" id="enSavoir">En savoir +</a>
                    </div>
                </div>
            </div>
            <div id="containeurInfoFormulaire">
                <div id="containeurExplication">
                    <h2>Mission Stop Squat achète votre bien squatté tel quel, avec les occupants.</h2>
                    <p id="descriptionExplication">Les propriétaires de résidences squattées sont démunis face à des procédures d’expulsion complexes et longues. De plus, les dégradations subies entraînent des frais souvent difficiles à assumer.</p>
                    <div id="containeurCommentCelaFonctionne">
                        <h2>Comment cela fonctionne ?</h2>
                        <div className="etape">
                            <p className="chiffre">1</p>
                            <p className="infoChiffre">Remplissez le formulaire avec vos informations personnelles et les détails du bien.</p>
                        </div>
                        <div className="etape">
                            <p className="chiffre">2</p>
                            <p className="infoChiffre">Nos experts vous contacteront bientôt pour plus d’informations et de détails sur le bien.</p>
                        </div>
                        <div className="etape">
                            <p className="chiffre">3</p>
                            <p className="infoChiffre">Sous 5 jours ouvrés, une proposition d’achat chiffrée vous sera communiquée. À défaut, nous vous indiquerons notre refus d’achat de votre bien.</p>
                        </div>
                    </div>
                </div>
                <div id="formulaireContact">
                    <h1>Fomulaire de contact</h1>
                    <div className="barreSeparation"></div>
                    <div className="containeurChamp">
                        <p>Nom</p>
                        <input type="text" placeholder="Nom" name="" id="" />
                    </div>
                    <div className="containeurChamp">
                        <p>Prénom</p>
                        <input type="text" name="" placeholder="Prénom" id="" />
                    </div>
                    <div className="containeurChamp">
                        <p>Numéro de téléphone</p>
                        <PhoneInput
                            country={"fr"} // Pays par défaut
                            value={phone}
                            onChange={(value) => setPhone(value)}
                            inputStyle={{ width: "100%", height: "40px" }} // Style optionnel
                        />
                    </div>
                    <div className="containeurChamp">
                        <p>Adresse email</p>
                        <input type="text" name="" id="" placeholder="Email" />
                    </div>
                    <div className="containeurChamp">
                        <p>Adresse de votre bien</p>
                        <input type="text" name="" id="" placeholder="Adresse" />
                    </div>
                    <div className="containeurChamp">
                        <p>Déscrivez votre problème</p>
                        <textarea name="" id="description" placeholder="Votre message"/>
                    </div>
                    <a href="politique-de-confidentialité">Politique de confidentialité * - en savoir plus</a>
                    <div id="containeurCheckbox">
                        <input type="checkbox" name="" id="" />
                        <p>J’ai lu et accepte la politique de confidentialité de ce site</p>
                    </div>
                    <button className="buttonEnvoyer">Envoyer</button>
                </div>
            </div>
            <div id="quiSommeNous">
                <h1>Qui sommes-nous ?</h1>
                <div id="containeurTextImageQuiSommeNous">
                    <p>Notre société est spécialisée dans l’acquisition de biens immobiliers complexes : logements squattés, locataires en impayés, biens marqués par un drame ou en indivision conflictuelle. Forts de notre expertise en droit immobilier, en procédures contentieuses et amiables, ainsi qu’en rénovation, nous offrons une solution rapide et sécurisée aux vendeurs. Grâce à nos fonds propres, nous achetons comptant, sans condition suspensive, garantissant une transaction fluide et sans risque. Notre approche allie maîtrise juridique et savoir-faire technique, nous permettant de valoriser ces biens et de leur redonner un second souffle.</p>
                    <img src="justice.png" alt="" />
                </div>
            </div>
            <div id="notreSolution">
                <h1>Rachat de biens squattés</h1>
                <p>En nous vendant votre bien squatté, vous vous épargnez une longue procédure qui commence par l’expulsion des squatteurs et qui finit par la remise en état d’un bien qui souvent est devenu insalubre.</p>
                <div id="containeurBlocRachat">
                    <div className="blocRachat">
                        <div>
                            <img src="argent.png" alt="" />
                            <p>Analyse juridique et faisabilité</p>    
                        </div>
                        <p>Nous examinons la situation du bien : titre de propriété, occupation sans droit ni titre, existence d’une procédure d’expulsion en cours ou à engager. Cette étape permet d’évaluer les risques et les délais nécessaires pour récupérer la pleine possession du bien.</p>
                    </div>
                    <div className="blocRachat">
                        <div>
                            <img src="securise.png" alt="" />
                            <p>Achat rapide et sécurisé</p>    
                        </div>
                        <p>Grâce à nos fonds propres, nous achetons comptant et sans condition suspensive. Cette rapidité évite aux vendeurs d’engager de nouvelles procédures coûteuses et incertaines. La vente peut être finalisée en quelques semaines chez le notaire.</p>
                    </div>
                    <div className="blocRachat">
                        <div>
                            <img src="gestion.png" alt="" />
                            <p>Gestion et libération du bien</p>    
                        </div>
                        <p>Après l’achat, nous prenons en charge l’expulsion si nécessaire, en respectant les procédures légales. Nous sécurisons ensuite le bien et engageons les travaux de rénovation pour le remettre sur le marché.</p>
                    </div>
                </div>
            </div>
            <div id="nosValeurs">
                <h1>Nos valeurs</h1>
                <div id="containeurNosValeurs">
                    <div className="valeur">
                        <img src="argent.png" alt="" />
                        <h2>Solution fiable</h2>
                        <p>Nous payons comptant, nos accords d’achat sont sans clause suspensive de financement ou de situation.</p>
                    </div>
                    <div className="valeur">
                        <img src="argent.png" alt="" />
                        <h2>Solution humaine</h2>
                        <p>Si nous intervenons dans le respect du droit, notre solution repose sur le dialogue et l’accompagnement.</p>
                    </div>
                    <div className="valeur">
                        <img src="argent.png" alt="" />
                        <h2>Solution équitable</h2>
                        <p>Nous évaluons votre bien en fonction de sa situation juridique et technique.</p>
                    </div>
                    <div className="valeur">
                        <img src="argent.png" alt="" />
                        <h2>Solution rapide</h2>
                        <p>En devenant le nouveau propriétaire de votre bien, nous vous libérons de la situation complexe qui vous rend la vie impossible.</p>
                    </div>
                    <div className="valeur">
                        <img src="argent.png" alt="" />
                        <h2>Solution sûre</h2>
                        <p>Nous vous exonérons de toutes les responsabilités et incertitudes des procédures judiciaires en devenant propriétaire de votre bien.</p>
                    </div>
                    <div className="valeur">
                        <img src="argent.png" alt="" />
                        <h2>Solution sereine</h2>
                        <p>Nous vous accompagnons dans l’ensemble de vos démarches grâce à notre équipe et nos partenaires avocats, notaires et huissiers.</p>
                    </div>
                </div>
            </div>
            <div id="containeurFAQ">
                <div id="questionFAQ">
                    <h1>Posez-votre question</h1>
                    <input type="text" placeholder="Nom Prénom" />
                    <textarea name="" placeholder="Votre question" id=""></textarea>
                    <button className="buttonEnvoyer">Envoyer</button>
                </div>
                <div id="FAQ">
                    <h1>FAQ</h1>
                    <FAQAccordion data={faqData} />
                </div>
            </div>
            <footer>
                <p>Mission stop squat</p>
                <div id="infoReseaux">
                    <p>Nous sommes la société suivante <a href="mission-stop-squat.com">Mission-stop-squat.com</a></p>
                    <div id="containeurReseaux">
                        <img src="facebook.png" alt="" />
                        <img src="whatsapp.png" alt="" />
                        <img src="instagram.png" alt="" />
                    </div>
                </div>
                <div className="barreSeparation"></div>
                <div id="containeurMentions">
                    <p>© 2025 Mission Stop Squat</p>
                    <a href="">Mentions légales</a>
                    <p>Designé par Ewen Buhot et Johanne Vigouroux</p>
                </div>
            </footer>
        </div>
        </>
    );
}

export default Home;