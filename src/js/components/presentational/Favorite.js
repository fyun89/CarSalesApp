import React from 'react';
import PropTypes from 'prop-types';

const Favorite = ({
  vinNum,
  handleFavorite,
  handleCheckFavorite,
}) => (
  <div className="form-check col-12 col-md-2 col-xl-2">
    <label className="form-check-label" htmlFor="favoriteCheckBox">
      <input
        className="form-check-input"
        type="checkbox"
        checked={handleCheckFavorite(vinNum)}
        onChange={() => handleFavorite(vinNum)}
      />
      Add to Favorite
    </label>
  </div>
);

Favorite.propTypes = {
  vinNum: PropTypes.string.isRequired,
  handleFavorite: PropTypes.func.isRequired,
  handleCheckFavorite: PropTypes.func.isRequired,
};

export default Favorite;
