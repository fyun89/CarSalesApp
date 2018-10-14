import React from 'react';

const Favorite = ({
  data,
  vinNum,
  handleFavorite,
  handleCheckFavorite
}) => (
  <div className="form-check">
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

export default Favorite;
