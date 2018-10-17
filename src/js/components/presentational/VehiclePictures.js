import React from 'react';
import PropTypes from 'prop-types';

const shortid = require('shortid');

const VehiclePictures = ({ purpose, data }) => {
  if (purpose === 'browsePage') { // if this component is being used for browse page (listing page)
    if (!data) {
      return null;
    }
    return (
      <div className="imageParent col-12 col-md-7 col-xl-7">
        <img className="img-fluid" src={data.chrome_image_url} alt="Vehicle" />
      </div>
    );
  }
  if (purpose === 'detailPage') { // if this component is being used for detail page
    if (!data) {
      return null;
    }
    return (
      <div id="vehicleCarousel" className="carousel slide col" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#vehicleCarousel" data-slide-to="0" className="active" />
          {data.map((elem, i) => {
            if (i > 0) {
              return <li key={shortid.generate()} data-target="#vehicleCarousel" data-slide-to={i} />;
            }
            return null;
          })}
        </ol>
        <div className="carousel-inner" data-interval="false">
          <div className="carousel-item active">
            <img className="d-block w-100" src={data[0]} alt="First slide" />
          </div>
          {data.map((elem, i) => {
            if (i > 0) {
              return (
                <div key={shortid.generate()} className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={elem}
                    alt="vehicle"
                    onError={(event) => event.target.setAttribute('src', 'https://www.ispab.org/wp-content/themes/consultix/images/no-image-found-360x260.png')}
                  />
                </div>
              );
            }
            return null;
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
};

VehiclePictures.propTypes = {
  purpose: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([PropTypes.shape({ body_style: PropTypes.string }), PropTypes.array]),
};

export default VehiclePictures;
