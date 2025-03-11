import "../assets/home.css"
function Home() {    
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
                        <a href="notreSolution">Notre solution</a>
                        <a href="nosValeurs">Nos valeurs</a>
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
                            <p className="infoChiffre">sous 5 jours ouvrés, une proposition d’achat chiffrée vous sera communiquée. À défaut, nous vous indiquerons notre refus d’achat de votre bien.</p>
                        </div>
                    </div>
                </div>
                <div id="formulaireContact">
                    <h1>Fomulaire de contact</h1>
                    <div className="barreSeparation"></div>
                    <div className="containeurChamp">
                        <p>Nom</p>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="containeurChamp">
                        <p>Prénom</p>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="containeurChamp">
                        <p>Numéro de téléphone</p>
                        <input type="phone" name="" id="" />
                    </div>
                    <div className="containeurChamp">
                        <p>Adresse email</p>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="containeurChamp">
                        <p>Adresse de votre bien</p>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="containeurChamp">
                        <p>Déscrivez votre problème</p>
                        <input type="text" name="" id="" />
                    </div>
                    <a href="politique-de-confidentialité">Politique de confidentialité * - en savoir plus</a>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <p>J’ai lu et accepte la politique de confidentialité de ce site</p>
                    </div>
                    <button>Envoyer</button>
                </div>
            </div>
            <div id="quiSommeNous">
                <h1>Qui sommes-nous ?</h1>
                <div>
                    <p>Notre société est spécialisée dans l’acquisition de biens immobiliers complexes : logements squattés, locataires en impayés, biens marqués par un drame ou en indivision conflictuelle. Forts de notre expertise en droit immobilier, en procédures contentieuses et amiables, ainsi qu’en rénovation, nous offrons une solution rapide et sécurisée aux vendeurs. Grâce à nos fonds propres, nous achetons comptant, sans condition suspensive, garantissant une transaction fluide et sans risque. Notre approche allie maîtrise juridique et savoir-faire technique, nous permettant de valoriser ces biens et de leur redonner un second souffle.</p>
                    <img src="justice.png" alt="" />
                </div>
            </div>
            <div id="rachatDeBiensSquattes">
                <h1>Rachat de biens squattés</h1>
                <p>En nous vendant votre bien squatté, vous vous épargnez une longue procédure qui commence par l’expulsion des squatteurs et qui finit par la remise en état d’un bien qui souvent est devenu insalubre.</p>
                <div id="containeurBlocRachat">
                    <div className="blocRachat">
                        <div>
                            <img src="argent.png" alt="" />
                            <p>analyse juridique et faisabilité</p>    
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
            <div>
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
            <div>
                <h1>FAQ</h1>
            </div>
            <footer>
                <h1>Mission stop squat</h1>
                <div id="infoReseaux">
                    <p>Nous sommes la société suivante <a href="mission-stop-squat.com">Mission-stop-squat.com</a></p>
                    <div>
                        <img src="facebook.png" alt="" />
                        <img src="whatsapp.png" alt="" />
                        <img src="instagram.png" alt="" />
                    </div>
                    <div className="barreSeparation"></div>
                    <div>
                        <h2>© 2025 Mission Stop Squat</h2>
                        <a href="">Mentions légales</a>
                        <h2>Designé par Ewen Buhot et Johanne Vigouroux</h2>
                    </div>
                </div>
            </footer>
        </div>
        </>
    );
}

export default Home;