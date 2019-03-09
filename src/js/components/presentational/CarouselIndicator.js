import React from 'react';
import PropTypes from 'prop-types';

const shortid = require('shortid');

const CarouselIndicator = ({ data }) => (
  <ol className="carousel-indicators">
    <li data-target="#vehicleCarousel" data-slide-to="0" className="active" />
    {data.map((elem, i) => {
      if (i > 0) {
        return <li key={shortid.generate()} data-target="#vehicleCarousel" data-slide-to={i} />;
      }
      return null;
    })}
  </ol>
);

CarouselIndicator.propTypes = {
  data: PropTypes.oneOfType([PropTypes.shape({ body_style: PropTypes.string }), PropTypes.array]),
};

CarouselIndicator.defaultProps = {
  data: null,
};

export default CarouselIndicator;
