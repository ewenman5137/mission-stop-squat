import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import Faq from './pages/Faq';
import Chatbot from './pages/Chatbot';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/chatbot" element={<Chatbot/>} />
        <Route path="/faq" element={<Faq/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App