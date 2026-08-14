import React, { useState } from 'react';

const GALERIA = [
  {
    id: 1,
    titulo: "Naturaleza",
    url: "https://picsum.photos/id/10/800/600",
  },
  {
    id: 2,
    titulo: "Playa",
    url: "https://picsum.photos/id/12/800/600",
  },
  {
    id: 3,
    titulo: "Montaña",
    url: "https://picsum.photos/id/28/800/600",
  },
  {
    id: 4,
    titulo: "Ciudad",
    url: "https://picsum.photos/id/43/800/600",
  },
  {
    id: 5,
    titulo: "Bosque",
    url: "https://picsum.photos/id/19/800/600",
  },
  {
    id: 6,
    titulo: "Placeholder",
    url: "https://dummyimage.com/800x600/3182ce/ffffff.png&text=Demo+React",
  },
];

const GaleriaComponent = () => {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const abrirModal = (imagen) => {
    setImagenSeleccionada(imagen);
  };

  const cerrarModal = () => {
    setImagenSeleccionada(null);
  };

  const navegarImagen = (direccion, e) => {
    e.stopPropagation();
    if (!imagenSeleccionada) return;
    const currentIndex = GALERIA.findIndex((img) => img.id === imagenSeleccionada.id);
    let nextIndex = currentIndex + direccion;
    if (nextIndex < 0) nextIndex = GALERIA.length - 1;
    if (nextIndex >= GALERIA.length) nextIndex = 0;
    setImagenSeleccionada(GALERIA[nextIndex]);
  };

  return (
    <div className="galeria-container">
      <style>{`
        .galeria-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 24px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: #1e293b;
        }
        .galeria-header {
          text-align: center;
          margin-bottom: 32px;
        }
        .galeria-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 8px 0;
        }
        .galeria-header p {
          color: #64748b;
          font-size: 1rem;
          margin: 0;
        }
        .galeria-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }
        .galeria-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          cursor: pointer;
          background-color: #ffffff;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .galeria-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .galeria-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }
        .galeria-card-info {
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .galeria-card-title {
          font-weight: 600;
          font-size: 1.1rem;
          color: #334155;
        }
        .galeria-card-badge {
          font-size: 0.75rem;
          background-color: #e2e8f0;
          color: #475569;
          padding: 4px 8px;
          border-radius: 9999px;
          font-weight: 500;
        }

        /* Lightbox Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(15, 23, 42, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }
        .modal-content {
          position: relative;
          max-width: 850px;
          width: 100%;
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        .modal-body {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0f172a;
          min-height: 350px;
        }
        .modal-body img {
          max-width: 100%;
          max-height: 70vh;
          object-fit: contain;
          display: block;
        }
        .modal-footer {
          padding: 16px 24px;
          background: #ffffff;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .modal-btn-close {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(0, 0, 0, 0.6);
          color: white;
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }
        .modal-btn-close:hover {
          background: rgba(0, 0, 0, 0.8);
        }
        .modal-btn-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .modal-btn-nav:hover {
          background: rgba(255, 255, 255, 0.4);
        }
        .modal-btn-prev { left: 16px; }
        .modal-btn-next { right: 16px; }
      `}</style>

      <header className="galeria-header">
        <h2>Galería de Imágenes</h2>
        <p>Haz clic en cualquier imagen para desplegar el visor a pantalla completa</p>
      </header>

      <div className="galeria-grid">
        {GALERIA.map((item) => (
          <div
            key={item.id}
            className="galeria-card"
            onClick={() => abrirModal(item)}
          >
            <img src={item.url} alt={item.titulo} loading="lazy" />
            <div className="galeria-card-info">
              <span className="galeria-card-title">{item.titulo}</span>
              <span className="galeria-card-badge">ID: {item.id}</span>
            </div>
          </div>
        ))}
      </div>

      {imagenSeleccionada && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-btn-close" onClick={cerrarModal}>
              ✕
            </button>
            <div className="modal-body">
              <button
                className="modal-btn-nav modal-btn-prev"
                onClick={(e) => navegarImagen(-1, e)}
              >
                ❮
              </button>
              <img src={imagenSeleccionada.url} alt={imagenSeleccionada.titulo} />
              <button
                className="modal-btn-nav modal-btn-next"
                onClick={(e) => navegarImagen(1, e)}
              >
                ❯
              </button>
            </div>
            <div className="modal-footer">
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>
                {imagenSeleccionada.titulo}
              </h3>
              <span style={{ color: '#64748b', fontSize: '0.9rem' }}>
                {GALERIA.findIndex((img) => img.id === imagenSeleccionada.id) + 1} de {GALERIA.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleriaComponent;