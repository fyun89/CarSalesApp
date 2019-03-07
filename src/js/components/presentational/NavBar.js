import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ backToBrowseBtnClick, selected }) => {
  if (!selected) { // while on "browse" page
    return (
      <div className="navbar">
        <div className="navbarLogo">Find Your Drive!</div>
      </div>
    );
  }
  if (selected) { // while on specific vehicle page
    return (
      <div className="navbar">
        <div className="navbarLogo">Find Your Drive!</div>
        <button type="button" className="btn btn-primary" onClick={backToBrowseBtnClick}>Back to Browse</button>
      </div>
    );
  }
  return null;
};

NavBar.propTypes = {
  backToBrowseBtnClick: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
};

export default NavBar;
