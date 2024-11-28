import React, { useState } from 'react';

interface Recurso {
  id: number;
  titulo: string;
  descripcion: string;
  enlace: string;
  categoria: string;
}

const RecursosEducativos: React.FC = () => {
  const [recursos] = useState<Recurso[]>([
    {
      id: 1,
      titulo: 'Trastorno afectivo estacional: Algo más que la tristeza invernal',
      descripcion: 'Explicamos un poco sobre este tipo de Depresión',
      enlace: 'https://www.nimh.nih.gov/health/publications/espanol/trastorno-afectivo-estacional-algo-mas-que-la-tristeza-invernal?utm_campaign=shareNIMH&utm_medium=Portal&utm_source=NIMHwebsite',
      categoria: 'Depresión',
    },
    {
      id: 2,
      titulo: '¡Estoy tan estresado! hoja informativa',
      descripcion: 'Hoja informativa en la que se habla sobre el estrés',
      enlace: 'https://www.nimh.nih.gov/health/publications/espanol/estoy-tan-estresado?utm_campaign=shareNIMH&utm_medium=Portal&utm_source=NIMHwebsite',
      categoria: 'Estrés',
    },
    {
      id: 3,
      titulo: 'Ayuda para la salud mental',
      descripcion: 'Si usted o alguien que conoce tiene una enfermedad mental, tiene dificultades emocionales o inquietudes sobre su salud mental, existen formas de obtener ayuda.',
      enlace: 'https://www.nimh.nih.gov/health/find-help/ayuda-para-la-salud-mental?utm_campaign=shareNIMH&utm_medium=Portal&utm_source=NIMHwebsite',
      categoria: 'Salud Mental en General',
    },
    {
      id: 4,
      titulo: 'Trastorno bipolar',
      descripcion: 'El trastorno bipolar es un trastorno mental que causa cambios inusuales en el estado de ánimo, los niveles de energía y actividad, la concentración y la capacidad de realizar las tareas cotidianas.',
      enlace: 'https://www.ejemplo.com/marketing',
      categoria: 'Trastorno mental',
    },
    {
      id: 5,
      titulo: 'Esquizofrenia',
      descripcion: 'La esquizofrenia es una enfermedad mental grave que afecta la forma en que una persona piensa, siente y se comporta.',
      enlace: 'https://www.nimh.nih.gov/health/publications/espanol/la-esquizofrenia',
      categoria: 'Esquizofrenia',
    },
  ]);

  const [categoriaSeleccionada] = useState<string>('');

  const recursosFiltrados = categoriaSeleccionada
    ? recursos.filter((recurso) => recurso.categoria === categoriaSeleccionada)
    : recursos;

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', color: '#000B59' }}>Recursos Educativos sobre la Salud Mental</h2>

      <div>
        {recursosFiltrados.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'red' }}>No hay recursos disponibles para esta categoría.</p>
        ) : (
          recursosFiltrados.map((recurso) => (
            <div
              key={recurso.id}
              style={{
                backgroundColor: '#ffffff',
                padding: '15px',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                marginBottom: '15px',
              }}
            >
              <h3 style={{ color: '#000B59' }}>{recurso.titulo}</h3>
              <p>{recurso.descripcion}</p>
              <a href={recurso.enlace} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>
                Ver más
              </a>
              <p style={{ fontStyle: 'italic', color: '#777' }}>Categoría: {recurso.categoria}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecursosEducativos;
