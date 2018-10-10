import React from 'react';
import PropTypes from 'prop-types';

const VehiclePictures = ({ purpose, data }) => {
  if (purpose === 'browsePage') { // if this component is being used for browse page (listing page)
    if (!data) {
      return <div>Loading Image...</div>
    }
    return (
      <div className="imageParent col-sm">
        <img className="img-fluid" src={data.chrome_image_url} alt="Car Listing Image" />
      </div>
    );
  }
  if (purpose === 'detailPage') { // if this component is being used for detail page
    if (!data) {
      return <div>Loading Image...</div>
    }
    return (
      <div className="imageParent col-sm">
        <img className="img-fluid" src={data} alt="Car Detail Images" />
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
