import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="title thin-text">Subir CSV</h2>
      <ul className="nav">
        <li><a className="link semi-bold-text" href="/welcome">Inicio</a></li>
        <li><a className="link semi-bold-text" href="/about">Acerca de</a></li>
        <li><a className="link semi-bold-text" href="/upload">Subir CSV</a></li>
        <li><a className="link semi-bold-text" href="#">Configuración</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
