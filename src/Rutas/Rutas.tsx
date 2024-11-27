import { Route, Routes } from "react-router-dom";
import { Inicio } from "../Componentes/Inicio"

export const Rutas = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
        </Routes>
    )
}