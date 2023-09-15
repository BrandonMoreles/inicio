import React from 'react'
import "../styles/header.css"
import logo from "../assets/images/logo.jpg"
const Header = () => {
  return (
    <div className='header'>
        <img src={logo} className='logo'></img>
        <div className='listContainer'>
            <h6 className='listItem'>Nosotros</h6>
            <h6 className='listItem'>Noticias</h6>
            <h6 className='listItem'><a href='https://jet3.jetaccess.de/aj/'>Software</a></h6>
            <h6 className='listItem'>Equipo</h6>
            <h6 className='listItem'>Contacto</h6>
        </div>
    </div>
  )
}

export default Header