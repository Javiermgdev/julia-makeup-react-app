import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
      <li><a href="/paymentCard">Price</a></li>
          <li><a href="/aboutUs">About us</a></li>
          <li><a href="/qa">Q&A</a></li>
          <li><a href="/contactform">Contact form</a></li>
          <li><a href="/login">Admin</a></li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
