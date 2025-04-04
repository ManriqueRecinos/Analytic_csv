import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Acerca de</h1>
      <p style={styles.text}>
        Hola, soy <strong>Manrique Recinos</strong>, un apasionado del desarrollo de software.
        Actualmente trabajo como <strong>Auxiliar de Sistemas</strong> y estoy en mi camino para convertirme en desarrollador full stack.
      </p>
      <p style={styles.text}>
        Este proyecto fue creado en 2025 como parte de mi aprendizaje y práctica en el desarrollo web.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center',     // Centra el contenido horizontalmente
    overflow: 'hidden',       // Elimina el scroll
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.2rem',
    color: '#000',
    lineHeight: '1.6',
  },
};

export default About;
