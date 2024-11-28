import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../imgs/Logo ZenMind.jpeg';

export const Cabecera: React.FC = () => {
    return (
        <nav style={{ backgroundColor: '#74ff75' }} className="navbar navbar-expand-lg w-100">
            <div className="container-fluid">
                {/* Logo de la marca */}
                <Link className="navbar-brand active" to="/">
                    <img
                        src={Logo}
                        alt="ZenMind Logo"
                        className="rounded-circle hover-shadow"
                        width="70"
                        height="70"
                    />
                </Link>

                {/* Botón para dispositivos móviles */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Elementos de navegación */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* Link al componente ChatBot */}
                        <li className="nav-item hover-shadow">
                            <Link
                                style={{ fontSize: '20px', color: '#000B59' }}
                                className="nav-link active josefin-sans-kento"
                                to="/cb"
                            >
                                <b>Lyra</b>
                            </Link>
                        </li>

                        <li className="nav-item hover-shadow">
                            <Link
                                style={{ fontSize: '20px', color: '#000B59' }}
                                className="nav-link active josefin-sans-kento"
                                to="/re"
                            >
                                <b>Recursos Educativos</b>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
