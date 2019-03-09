import React from 'react';
import PropTypes from 'prop-types';

const CarouselButton = ({ action, forClassName, dataSlide }) => (
  <a className={forClassName} href="#vehicleCarousel" role="button" data-slide={dataSlide}>
    <span className={`${forClassName}-icon`} aria-hidden="true" />
    <span className="sr-only">{action}</span>
  </a>
);

CarouselButton.propTypes = {
  action: PropTypes.string.isRequired,
  forClassName: PropTypes.string.isRequired,
  dataSlide: PropTypes.string.isRequired,
};

export default CarouselButton;
