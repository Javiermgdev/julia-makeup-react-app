import React, { Component } from 'react';
import {Navigation} from './Style'


export default class NavigationBar extends React.Component {
  render () {
    
      return (
        <Navigation className="Navigation">
          
            <header>
              <nav class="navigationBar">
                <ul class="menu">
                  <li><a href="#">Inicio</a></li>
                  <li><a href="#">Cita</a>
                     <ul class="submenu"> 
                        <li><a href="#">Servicio 1</a></li>
                        <li><a href="#">Servicio 2</a></li>
                      </ul>
                  </li>
                  <li><a href="#">Resgistrate</a></li>
                  <li><a href="#">Admin</a></li>
                </ul>
              </nav>
            </header>
          
        </Navigation>
      );
    
  } 
}

