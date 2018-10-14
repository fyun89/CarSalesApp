import React from 'react';

const NavBar = ({ backToBrowseBtnClick, selected }) => {
  if (!selected) {
    return (
      <div className="navbar">
        <div><strong>fair</strong></div>
      </div>
    );
  }
  if (selected) {
    return (
      <div className="navbar">
        <div><strong>fair</strong></div>
        <button type="button" className="btn btn-primary" onClick={backToBrowseBtnClick}>Back to Browse</button>
      </div>
    );
  }
  return null;
};

export default NavBar;
