import React from 'react';
import PropTypes from 'prop-types';

const VehiclePictures = ({ purpose, data }) => {
  if (purpose === 'browsePage') {
    return (
      <div className="imageParent">
        <img className="img-fluid" src={data.chrome_image_url} alt="car" />
      </div>
    );
  }
  if (purpose === 'detailPage') {
    return (
      <div>
        THIS IS VEHICLE SPEC
      </div>
    );
  }
  return (
    <div>
      Loading images
    </div>
  );
};

export default VehiclePictures;

/*
Code reuse
  conditional - if called from browse, display single picture
  if called from ProductDetail, display multiple picture
*/
