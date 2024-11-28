import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cabecera } from "./Componentes/Cabecera"
import { Inicio } from './Componentes/Inicio';
import { ChatBot } from './Componentes/ChatBot';
import RecursosEducativos from './Componentes/RecursosEducativos';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="josefin-sans">
          <Cabecera />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/cb" element={<ChatBot />} /> 
            <Route path="/re" element={<RecursosEducativos />} /> 
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
