import React, { useState, useEffect } from 'react';
import '../styles/carousel.css';
import Imagen1 from '../assets/images/cjj.jpg';
import Imagen2 from '../assets/images/cjj2.jpg';
import Imagen3 from '../assets/images/stjj.jpg';

const Carousel = () => {
  const images = [Imagen1, Imagen2, Imagen3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Intervalo de tiempo en milisegundos para cambiar las diapositivas automáticamente
  const autoSlideInterval = 8000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Cambiar a la siguiente diapositiva cuando se cumple el intervalo
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoSlideInterval);

    // Limpia el intervalo cuando el componente se desmonta
    return () => {
      clearInterval(intervalId);
    };
  }, []); // El array vacío [] garantiza que este efecto se ejecute una vez al montar el componente

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel-button left">
        &lt;
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image img"
      />
      <button onClick={nextSlide} className="carousel-button right">
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
