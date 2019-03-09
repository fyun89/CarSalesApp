import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ backToBrowseBtnClick, selected }) => {
  const backToBrowseButton = selected
    ? <button type="button" className="btn btn-primary" onClick={backToBrowseBtnClick}>Back to Browse</button>
    : null;

  return (
    <div className="navbar">
      <div className="navbarLogo">Find Your Drive!</div>
      {backToBrowseButton}
    </div>
  );
};

NavBar.propTypes = {
  backToBrowseBtnClick: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
};

export default NavBar;
