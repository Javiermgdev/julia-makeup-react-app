import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo"><a href="/">JuliaSagasMakeUp</a></div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li><a href="/contacto">Reserva</a></li>
          <li><a href="/">Inicio</a></li>
          <li><a href="/galeria">Galeria</a></li>
          <li><a href="/login">Admin</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
