import React from 'react'; // <-- Agrega esta línea

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>### FOOTER → hola footer</p>
    </footer>
  );
}

const styles = {
  footer: {
    width: '100%',
    padding: '20px',
    backgroundColor: '#f1f1f1',
    textAlign: 'center',
    marginTop: 'auto',
  },
};