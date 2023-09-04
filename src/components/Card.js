import React from 'react'
import "../styles/card.css"
const Card = ({Imagen, texto}) => {
  
    return (
    <div className='card'>
       <img className='imagenCard' src={Imagen}></img>
        <h2 className='txtCard'>{texto}</h2>
        <div className='button'>Ver mas</div>
    </div>
  )
}

export default Card
