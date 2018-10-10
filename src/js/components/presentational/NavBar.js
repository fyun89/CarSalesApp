import React from 'react';

const NavBar = ({ backToMainBtnClick }) => (
  <div>
    <div className="navbar">Navigation</div>
    <button type="button" className="btn btn-primary" onClick={backToMainBtnClick}>To Main</button>
  </div>
);

export default NavBar;
