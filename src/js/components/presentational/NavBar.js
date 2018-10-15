import React from 'react';
import PropTypes from 'prop-types';

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

NavBar.propTypes = {
  backToBrowseBtnClick: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
};

export default NavBar;
