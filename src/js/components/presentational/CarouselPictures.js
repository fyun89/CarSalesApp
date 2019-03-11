import React from 'react';
import PropTypes from 'prop-types';

const shortid = require('shortid');

const CarouselPictures = ({ data }) => (
  <div className="carousel-inner" data-interval="false">
    <div className="carousel-item active">
      <img className="d-block w-100" src={data[0]} alt="First slide" />
    </div>
    {data ? data.map((elem, i) => {
      console.log('data', elem)
      if (i > 0) {
        return (
          <div key={shortid.generate()} className="carousel-item">
            <img
              className="d-block w-100"
              src={elem}
              alt="vehicle"
              onError={event => event.target.setAttribute('src', 'https://www.ispab.org/wp-content/themes/consultix/images/no-image-found-360x260.png')}
            />
          </div>
        );
      }
      return null;
    }) : null
    }
  </div>
);

CarouselPictures.propTypes = {
  data: PropTypes.oneOfType([PropTypes.shape({ body_style: PropTypes.string }), PropTypes.array]),
};

CarouselPictures.defaultProps = {
  data: null,
};

export default CarouselPictures;
