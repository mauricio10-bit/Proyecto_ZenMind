import './App.css'
import { BrowserRouter } from "react-router-dom";
import { Cabecera } from "./Componentes/Cabecera"
import { Inicio } from './Componentes/Inicio';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="josefin-sans">
          <Cabecera />
          <Inicio />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
