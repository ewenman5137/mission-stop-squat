import "../assets/panel.css"
  
function panel() {    
    return (
        <>
        <div id="panel">
            <div id="containeurRetourLogo">
                <button onClick={() => window.history.back()}><img id="flecheRetour" src="flechePage.svg" alt="" /></button>
                <a href="/"><img id="logo" src="logo.png" alt="" /></a>
            </div>
            <div id="containeurPage">
                <a href="/faq" className={location.pathname === "/faq" ? "pageEnCours" : "page"}>
                    <img src="faq.svg" alt="" />
                    <p>FAQ</p>
                    <img className="fleche" src="flechePage.svg" alt="" />
                </a>
                <a href="/chatbot" className={location.pathname === "/chatbot" ? "pageEnCours" : "page"}>
                    <img src="chat.svg" alt="" />
                    <p>Chatbot</p>
                    <img className="fleche" src="flechePage.svg" alt="" />
                </a>
            </div>
            <button id="btnDeconnexion">
                <img src="deconnexion.svg" alt="" />
                <p>Déconnexion</p>
            </button>
        </div>
        </>
    );
}

export default panel;