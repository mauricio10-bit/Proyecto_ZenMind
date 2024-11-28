import React, { useState, ChangeEvent } from 'react';

interface Message {
    sender: 'user' | 'bot';
    text: string;
}

export const ChatBot: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [userInput, setUserInput] = useState<string>('');

    const handleSendMessage = (): void => {
        if (userInput.trim() === '') return;

        // Agregar mensaje del usuario
        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: 'user', text: userInput },
        ]);

        // Respuesta automática del chatbot
        setTimeout(() => {
            const botResponse = generateBotResponse(userInput);
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'bot', text: botResponse },
            ]);
        }, 1000);

        // Limpiar entrada del usuario
        setUserInput('');
    };

    const generateBotResponse = (input: string): string => {
        // Respuestas simuladas basadas en palabras clave
        const lowerInput = input.toLowerCase();
        if (
            lowerInput.includes('hola') ||
            lowerInput.includes('buenos días') ||
            lowerInput.includes('buenas tardes') ||
            lowerInput.includes('buenas noches')
        ) {
            return 'Hola, soy Lyra y te estaré acompañando el día de hoy para cualquier consulta. ¿En qué puedo ayudarte?';
        } else if (lowerInput.includes('ansiedad') || lowerInput.includes('ansioso') || lowerInput.includes('ansiosa')) {
            return 'La respiración profunda puede ayudarte a calmar la ansiedad. Intenta inhalar lentamente durante 4 segundos, sostén por 4 segundos y exhala durante 4 segundos.';
        } else if (lowerInput.includes('estrés') || lowerInput.includes('estresado') || lowerInput.includes('estresada')) {
            return 'El estrés puede ser difícil de manejar pero no imposible. Intenta tomar descansos cortos, caminar o practicar mindfulness.';
        } else if (lowerInput.includes('mindfulness')) {
            return (
                'El <b>mindfulness</b> es una técnica de meditación que consiste en entrenar la mente para prestar atención al momento presente sin juzgar. ' +
                'Se basa en las enseñanzas budistas y se ha popularizado en Occidente por sus beneficios para la salud mental.<br><br>' +
                '<b>El mindfulness ayuda a:</b><br>' +
                '- Reducir el estrés<br>' +
                '- Mejorar la concentración<br>' +
                '- Incrementar el bienestar emocional<br>' +
                '- Trabajar conscientemente con el dolor, la enfermedad, la pérdida o los desafíos de la vida<br>' +
                '- Desarrollar la capacidad de discernimiento y la compasión<br><br>' +
                '<b>Para practicar mindfulness, puedes:</b><br>' +
                '- Meditar unos minutos al día<br>' +
                '- Establecer un momento específico del día para practicar<br>' +
                '- Prestar atención a la respiración<br>' +
                '- Reducir las distracciones digitales<br>' +
                '- Escuchar conscientemente<br>' +
                '- Caminar con atención plena<br>' +
                '- Registrar tus pensamientos y emociones<br>' +
                '- Unirte a un grupo o comunidad de personas que practican mindfulness'
            );
        } else {
            return 'Estoy aquí para apoyarte. ¿En qué más puedo ayudarte hoy?';
        }
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setUserInput(event.target.value);
    };

    return (
        <div style={{ height: '100%' }}>
            <div
                className="chatbot-container"
                style={{
                    backgroundColor: '#000B59',
                    color: 'white',
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    maxWidth: '400px',
                    margin: '20px auto',
                }}
            >
                <h3 className="text-center" style={{ color: '#74ff75' }}>
                    Lyra
                </h3>
                <div
                    className="chat-window"
                    style={{
                        backgroundColor: '#ffffff',
                        color: '#000B59',
                        padding: '10px',
                        borderRadius: '8px',
                        height: '300px',
                        overflowY: 'scroll',
                        marginBottom: '10px',
                    }}
                >
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            style={{
                                textAlign: msg.sender === 'user' ? 'right' : 'left',
                                margin: '10px 0',
                            }}
                        >
                            <span
                                style={{
                                    display: 'inline-block',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    backgroundColor:
                                        msg.sender === 'user' ? '#000B59' : '#6a6a6a',
                                    color: 'white',
                                    maxWidth: '70%',
                                    wordWrap: 'break-word',
                                }}
                                dangerouslySetInnerHTML={{ __html: msg.text }}
                            >
                                </span>
                        </div>
                    ))}
                </div>
                <div className="input-area" style={{ display: 'flex' }}>
                    <input
                        type="text"
                        value={userInput}
                        onChange={handleInputChange}
                        placeholder="Escribe un mensaje..."
                        style={{
                            flex: 1,
                            padding: '10px',
                            borderRadius: '8px',
                            border: '1px solid #6a6a6a',
                            marginRight: '10px',
                        }}
                    />
                    <button
                        onClick={handleSendMessage}
                        className="btn btn-outline-light"
                    >
                        Enviar
                    </button>
                </div>
            </div>
            <footer
                className="footer text-center"
                style={{
                    backgroundColor: '#000B59',
                    color: 'white',
                    padding: '20px',
                    width: '100%',
                }}
            >
                <p>&copy; 2024 Bienestar Digital. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};
