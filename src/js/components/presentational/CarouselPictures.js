import React from 'react';
import PropTypes from 'prop-types';

const CarouselPictures = ({ data, images }) => (
  <div className="carousel-inner" data-interval="false">
    <div className="carousel-item active">
      <img className="d-block w-100" src={data[0]} alt="First slide" onError={event => event.target.setAttribute('src', 'https://www.ispab.org/wp-content/themes/consultix/images/no-image-found-360x260.png')} />
    </div>
    {images.map(elem => elem)}
  </div>
);

CarouselPictures.propTypes = {
  data: PropTypes.oneOfType([PropTypes.shape({ body_style: PropTypes.string }), PropTypes.array]),
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

CarouselPictures.defaultProps = {
  data: null,
};

export default CarouselPictures;
