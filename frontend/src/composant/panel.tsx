import "../assets/panel.css"
  
function panel() {    
    return (
        <>
        <div id="panel">
            <div id="containeur-retour-logo">
                <button onClick={() => window.history.back()}><img id="fleche-retour" src="/flechePage.svg" alt="" /></button>
                <a href="/"><img id="logo" src="/logo.png" alt="" /></a>
            </div>
            <div id="containeur-page">
                <a href="/faq" className={location.pathname === "/faq" ? "page-en-cours" : "page"}>
                    <img src="/faq.svg" alt="" />
                    <p>FAQ</p>
                    <img className="fleche" src="/flechePage.svg" alt="" />
                </a>
                <a href="/chatbot" className={location.pathname === "/chatbot" ? "page-en-cours" : "page"}>
                    <img src="/chat.svg" alt="" />
                    <p>Chatbot</p>
                    <img className="fleche" src="/flechePage.svg" alt="" />
                </a>
            </div>
            <button id="btn-deconnexion">
                <img src="/deconnexion.svg" alt="" />
                <p>Déconnexion</p>
            </button>
        </div>
        </>
    );
}

export default panel;