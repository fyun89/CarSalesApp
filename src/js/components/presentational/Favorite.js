import React from 'react';

const Favorite = ({ checkState }) => (
  <div className="form-check">
    <input
      type="checkbox"
      onChange={()=>console.log(document.getElementsByClassName("form-check-input"))}
      className="form-check-input"
      id="controlFavorite"
    />
    <label className="form-check-label">Add to Favorite</label>
  </div>
);

export default Favorite;
