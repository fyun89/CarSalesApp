import React from 'react';
import PropTypes from 'prop-types';

const shortid = require('shortid');

const CarouselIndicator = ({ images }) => (
  <ol className="carousel-indicators">
    <li data-target="#vehicleCarousel" data-slide-to="0" className="active" />
    {images.map((elem, i) => (<li key={shortid.generate()} data-target="#vehicleCarousel" data-slide-to={i} />))}
  </ol>
);

CarouselIndicator.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CarouselIndicator;
