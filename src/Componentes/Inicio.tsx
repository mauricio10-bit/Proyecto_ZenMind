export const Inicio = () => {
    return (
        <>
            <div style={{ height: '100' }}>
                <section className="hero-section text-center" style={{ background: 'linear-gradient(to right, #000B59, #6a6a6a)', color: 'white', padding: '80px 0' }}>
                    <div className="container">
                        <h1 className="display-4"><b>Tu Compañero Digital para el Bienestar</b></h1>
                        <p className="lead">Apoyo emocional constante, recursos educativos actualizados y recomendaciones personalizadas para tu salud mental.</p>
                        <a href="#" className="btn btn-light btn-lg" style={{ color: '#000B59' }}>Comienza Ahora</a>
                    </div>
                </section>

                <div className="container-fluid">
                    <section id="¿Quienes-somos?" className="container my-5">
                        <h2 className="text-center mb-4" style={{ color: '#000B59' }}>¿Quienes somos?</h2>
                        <div>
                            <div className="feature-box" style={{ color: '#000B59', backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px', padding: '30px', marginBottom: '30px' }}>
                                <p>ZenMind es tu compañero digital para el bienestar integral, diseñado para ofrecer apoyo emocional constante, acceso a recursos educativos y recomendaciones personalizadas para mejorar tu calidad de vida. Nuestro compromiso es brindarte un entorno empático y seguro donde puedas manejar el estrés, la ansiedad y otros desafíos emocionales, todo con accesibilidad universal para garantizar que cada usuario se sienta escuchado, comprendido y empoderado para alcanzar su bienestar.</p>
                            </div>
                        </div>
                    </section>
                    <section id="¿Como-te-ayudamos?">
                        <h2 className="text-center mb-4" style={{ color: '#000B59' }}>¿Cómo Te Ayudamos?</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="feature-box" style={{ color: '#000B59', backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px', padding: '30px', marginBottom: '30px' }}>
                                    <h4>Apoyo Emocional</h4>
                                    <p>Recibe acompañamiento digital empático basado en buenas prácticas de apoyo psicológico, disponible 24/7.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-box" style={{ color: '#000B59', backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px', padding: '30px', marginBottom: '30px' }}>
                                    <h4>Personalización</h4>
                                    <p>El bot se adapta a tus necesidades, brindando recomendaciones y recursos según tus preferencias y patrones de uso.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-box" style={{ color: '#000B59', backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px', padding: '30px', marginBottom: '30px' }}>
                                    <h4>Accesibilidad</h4>
                                    <p>Con funciones como navegación por voz, subtítulos y un diseño inclusivo, garantizamos una experiencia accesible para todos.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


                <section className="bg-light py-5">
                    <div className="container text-center">
                        <h3 style={{ color: '#000B59' }}>Comienza tu Viaje hacia el Bienestar</h3>
                        <p style={{ color: '#000B59' }}>Regístrate ahora y recibe recomendaciones personalizadas para mejorar tu salud mental y bienestar.</p>
                        <a href="#" className="btn btn-lg" style={{ backgroundColor: '#000B59', color: 'white' }}>Regístrate</a>
                    </div>
                </section>

                <footer className="footer text-center" style={{ backgroundColor: '#000B59', color: 'white', padding: '20px' }}>
                    <p>&copy; 2024 Bienestar Digital. Todos los derechos reservados.</p>
                </footer>
            </div>
        </>
    )
}