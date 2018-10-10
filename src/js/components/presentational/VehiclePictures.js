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
      <div id="vehicleCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#vehicleCarousel" data-slide-to="0" className="active" />
          {data.map((elem,i) => {
            if (i > 0) {
              return <li data-target="#vehicleCarousel" data-slide-to={i} />
            }
          })}
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={data[0]} alt="First slide" />
          </div>
          {data.map((elem, i) => {
            if (i > 0) {
              return (
                <div className="carousel-item">
                  <img className="d-block w-100" src={elem} alt="First slide" />
                </div>
              );
            }
          })}
        </div>
        <a className="carousel-control-prev" href="#vehicleCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#vehicleCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
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
