import React from 'react';
import PropTypes from 'prop-types';

const VehiclePictures = ({ purpose, data }) => {
  if (purpose === 'browsePage') { // if this component is being used for browse page (listing page)
    return (
      <div className="imageParent col-sm">
        <img className="img-fluid" src={data.chrome_image_url} alt="No Image Available" />
      </div>
    );
  }
  if (purpose === 'detailPage') { // if this component is being used for detail page
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
