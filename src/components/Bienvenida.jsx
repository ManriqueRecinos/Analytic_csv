import SplitText from '../components/animations/SplitText';
import '../styles/Bienvenida.css'

const Home = () => {
  const handleAnimationComplete = () => {
    console.log('¡Animación completa!');
  };

  return (
    <div style={{ marginTop: '4rem', textAlign: 'center' }}>
      <SplitText
        text="Hello, Byron Bragiroli!"
        className="black-text" // Usa la clase 'black-text'
        delay={150}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
        onLetterAnimationComplete={handleAnimationComplete}
      />
    </div>
  );
};

export default Home;
