import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Faq from './pages/Faq';
import Chatbot from './pages/Chatbot';
import FaqReponse from './pages/FaqReponse';
import Mentions from './pages/Mentions';
import Login from './pages/Login';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/chatbot" element={<Chatbot/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/mentions" element={<Mentions/>} />
        <Route path="/faqReponse/:id" element={<FaqReponse/>} />
      </Routes>
    </Router>
  )
}

export default App