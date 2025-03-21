import "../assets/home.css"
import "../assets/mentions.css"

  
function Mentions() {    
    return (
        <>
        <div>
            <div id="containeur-nav">
                <nav>
                    <div id="bloc-gauche">
                        <img src="/logo.png" alt="" />
                        <h1>Mission Stop Squat</h1>
                    </div>
                    <div id="bloc-droit">
                        <a href="#home">Home</a>
                        <a href="#qui-sommes-nous">Qui sommes nous ?</a>
                        <a href="#notre-solution">Notre solution</a>
                        <a href="#nos-valeurs">Nos valeurs</a>
                    </div>
                </nav>
            </div>
            <div id="containeur-mentions">
                <h1>Mentions Légales</h1>

                <h2>Éditeur du site</h2>
                <p>Le site <strong>[Nom du site]</strong> est édité par <strong>Mission Stop Squat</strong>, [forme juridique] immatriculée sous le numéro SIRET [SIRET] et dont le siège social est situé à [Adresse].</p>

                <h2>Responsable de la publication</h2>
                <p>Marine [Nom de famille]</p>
                <p>Email : <a href="mailto:mission.stopsquat@gmail.fr">mission.stopsquat@gmail.fr</a></p>

                <h2>Hébergement</h2>
                <p>Le site est hébergé par <strong>Vercel</strong>, dont le siège social est situé à :</p>
                <p>[Adresse de Vercel]</p>
                <p>Site web de l’hébergeur : <a href="[URL de Vercel]" target="_blank">[URL de Vercel]</a></p>

                <h2>Activité</h2>
                <p><strong>Mission Stop Squat</strong> propose des devis relatifs à [description des services détaillée].</p>

                <h2>Propriété intellectuelle</h2>
                <p>Tous les contenus présents sur ce site (textes, images, graphismes, logo, etc.) sont protégés par les droits d’auteur et sont la propriété exclusive de <strong>Mission Stop Squat</strong>, sauf mention contraire. Toute reproduction, distribution, modification ou utilisation sans autorisation préalable est interdite.</p>

                <h2>Données personnelles</h2>
                <p>Les informations collectées via ce site sont destinées uniquement à [finalité : ex. gestion des devis, communication avec les clients, etc.].</p>
                <p>Conformément à la réglementation en vigueur (RGPD), vous disposez d’un droit d’accès, de modification et de suppression de vos données personnelles. Pour exercer ce droit, contactez <a href="mailto:mission.stopsquat@gmail.fr">mission.stopsquat@gmail.fr</a>.</p>

                <h2>Cookies</h2>
                <p>Le site peut utiliser des cookies pour améliorer l’expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies.</p>

                <h2>Limitation de responsabilité</h2>
                <p><strong>Mission Stop Squat</strong> ne pourra être tenu responsable des dommages directs ou indirects causés par l’utilisation du site ou par une interruption temporaire de son accessibilité.</p>

                <h2>Droit applicable</h2>
                <p>Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux compétents seront ceux de [Ville de juridiction].</p>
            </div>
            <footer>
                <p>Mission stop squat</p>
                <div id="info-reseaux">
                    <p>Nous sommes la société suivante <a href="mission-stop-squat.com">Mission-stop-squat.com</a></p>
                    <div id="containeur-reseaux">
                        <a href=""><img src="facebook.png" alt="" /></a>
                        <a href=""><img src="whatsapp.png" alt="" /></a>
                        <a href=""><img src="instagram.png" alt="" /></a>
                    </div>
                </div>
                <div className="barre-separation"></div>
                <div id="containeur-info-mentions">
                    <p>© 2025 Mission Stop Squat</p>
                    <a href="/mentions">Mentions légales</a>
                    <p>Designé par Ewen Buhot et Johanne Vigouroux</p>
                </div>
            </footer>
        </div>
        </>
    );
}

export default Mentions;