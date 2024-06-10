import React from 'react';
import Home from './sections/Home';
import About from './sections/About';
import Contact from './sections/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import BackgroundImage from './assets/background.jpg'; // Убедитесь, что путь к изображению верный

function App() {
  return (
    <>
      <Header />
      <Home bgImage={BackgroundImage} />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
