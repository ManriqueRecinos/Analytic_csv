import React from 'react';
import SplitText from '../components/animations/SplitText';
import '../styles/About.css';

const About = () => {
  const handleAnimationComplete = () => {
    // Puedes hacer algo cuando la animación termine si querés
  };

  return (
    <div className="about-container">
      <h1 className="about-title">Acerca de</h1>

      <SplitText
        text="Hola, soy Manrique Recinos, un apasionado del desarrollo de software. Actualmente trabajo como Auxiliar de Sistemas y estoy en mi camino para convertirme en desarrollador full stack."
        className="main_text"
        delay={5}
        animationFrom={{ opacity: 0, transform: 'translateY(5px)' }}
        animationTo={{ opacity: 1, transform: 'translateY(0)' }}
        easing="cubic-bezier(0.65, 0, 0.35, 1)" // más fluido
        threshold={0.2}
        rootMargin="-50px"
        onLetterAnimationComplete={handleAnimationComplete}
      />

      <SplitText
        text="Este proyecto fue creado en 2025 como parte de mi aprendizaje y práctica en el desarrollo web."
        className="thin_text"
        delay={10}
        animationFrom={{ opacity: 0, transform: 'translateY(5px)' }}
        animationTo={{ opacity: 1, transform: 'translateY(0)' }}
        easing="cubic-bezier(0.65, 0, 0.35, 1)"
        threshold={0.2}
        rootMargin="-50px"
        onLetterAnimationComplete={handleAnimationComplete}
      />
    </div>
  );
};

export default About;
