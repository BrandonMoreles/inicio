import React, { useState } from 'react';
import '../styles/menu.css';

const MenuMobile = () => {
  const [openMenu, setMenu] = useState(0);
  const [eleccion, setEleccion] = useState('Todas');

  const menuStyle = {
    transform: `scaleY(${openMenu})`,
  };
  const eleccionStyle = {
    border: openMenu === 0 ? '' : 'solid 1px #000',
    borderRadius: openMenu === 0 ? '' : '20px',
  };
  
  const toggleMenu = () => {
    setMenu(openMenu === 0 ? 1 : 0);
  };

  const handleOptionClick = (opcion) => {
    setEleccion(opcion);
    toggleMenu(); // Cierra el menú después de seleccionar una opción
  };

  return (
    <div className='menu'>
      <div className='eleccion' onClick={toggleMenu} style={eleccionStyle}>
        {eleccion}
      </div>
      <div className='opciones' style={menuStyle}>
        <div onClick={() => handleOptionClick('Todas')}>Todas</div>
        <div onClick={() => handleOptionClick('Arte')}>Arte</div>
        <div onClick={() => handleOptionClick('Algo más aquí')}>Algo más aquí</div>
        <div onClick={() => handleOptionClick('Alguna más')}>Alguna más</div>
        <div onClick={() => handleOptionClick('Otra opción')}>Otra opción</div>
      </div>
    </div>
  );
};

export default MenuMobile;
