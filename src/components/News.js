import React, { useEffect, useState } from 'react';
import Card from './Card';
import imagen1 from "../assets/images/noticia1.jpeg"
import imagen2 from "../assets/images/noticia2.jpeg"
import imagen3 from "../assets/images/noticia3.jpeg"
import imagen4 from "../assets/images/noticia2.png"
import "../styles/news.css"


const News = () => {

  return (
    <div className='news'>
        <h6>Conoce las recientes</h6>
        <h2>Noticias del mundo juridico</h2>
        <div className="cardContain"> 
            <Card Imagen={imagen1}texto={"El encabezado deberia de ir aqui"}/>
            <Card Imagen={imagen2}texto={"El encabezado deberia de ir aqui"}/>
            <Card Imagen={imagen3}texto={"El encabezado deberia de ir aqui"}/>
            <Card Imagen={imagen4}texto={"El encabezado deberia de ir aqui"}/>
        </div>
       
    </div>
  );
};

export default News;
