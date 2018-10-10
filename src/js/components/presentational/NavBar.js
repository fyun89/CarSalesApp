import React from 'react';

const NavBar = ({ backToBrowseBtnClick, selected }) => {
  if (!selected) {
    return (
      <div>
        <div className="navbar">Navigation</div>
      </div>
    );
  }
  return (
    <div className="navbar">
      <div>Navigation</div>
      <button type="button" className="btn btn-primary" onClick={backToBrowseBtnClick}>Back to Browse</button>
    </div>
  );
};

export default NavBar;
