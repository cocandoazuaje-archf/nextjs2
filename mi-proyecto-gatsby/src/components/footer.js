import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      {/* Sección superior: Ubicación */}
      <div style={styles.locationSection}>
        <span style={styles.locationText}>### Footer &rarr; Chile</span>
      </div>

      {/* Sección inferior: Enlaces */}
      <div style={styles.linksSection}>
        <div style={styles.leftLinks}>
          <a href="#sobre-google" style={styles.link}>Sobre Google</a>
          <a href="#publicidad" style={styles.link}>Publicidad</a>
          <a href="#negocios" style={styles.link}>Negocios</a>
          <a href="#como-funciona" style={styles.link}>Cómo funciona la Búsqueda</a>
        </div>

        <div style={styles.rightLinks}>
          <a href="#privacidad" style={styles.link}>Privacidad</a>
          <a href="#condiciones" style={styles.link}>Condiciones</a>
          <a href="#preferencias" style={styles.link}>Preferencias</a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    width: '100%',
    backgroundColor: '#001f3f', // Azul marino
    color: '#ffffff', // Letras blancas para contraste
    fontSize: '14px',
    fontFamily: 'arial, sans-serif',
    marginTop: 'auto',
    borderTop: '1px solid #e4e4e4',
  },
  locationSection: {
    padding: '15px 30px',
    borderBottom: '1px solid #dadce0',
  },
  locationText: {
    color: '#ffffff', // Letras blancas para contraste
  },
  linksSection: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '10px 20px',
  },
  leftLinks: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '25px',
    padding: '5px 10px',
  },
  rightLinks: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '25px',
    padding: '5px 10px',
  },
  link: {
    color: '#ffffff', // Letras blancas para contraste
    textDecoration: 'none',
  },
};