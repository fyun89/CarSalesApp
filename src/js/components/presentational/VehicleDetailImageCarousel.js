import React from 'react';
import PropTypes from 'prop-types';
import CarouselIndicator from './CarouselIndicator';
import CarouselPictures from './CarouselPictures';
import CarouselButton from './CarouselButton';

const VehicleDetailImageCarousel = ({ data }) => (
  data
    ? (
      <div className="container">
        <div className="row">
          <div id="vehicleCarousel" className="carousel slide col" data-ride="carousel">
            <CarouselIndicator data={data} />
            <CarouselPictures data={data} />
            <CarouselButton action="Previous" forClassName="carousel-control-prev" dataSlide="prev" />
            <CarouselButton action="Next" forClassName="carousel-control-next" dataSlide="next" />
          </div>
        </div>
      </div>
    ) : null
);

VehicleDetailImageCarousel.propTypes = {
  data: PropTypes.oneOfType([PropTypes.shape({ body_style: PropTypes.string }), PropTypes.array]),
};

VehicleDetailImageCarousel.defaultProps = {
  data: null,
};

export default VehicleDetailImageCarousel;
