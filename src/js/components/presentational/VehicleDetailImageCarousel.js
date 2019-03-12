import React from 'react';
import PropTypes from 'prop-types';
import CarouselIndicator from './CarouselIndicator';
import CarouselPictures from './CarouselPictures';
import CarouselButton from './CarouselButton';

const VehicleDetailImageCarousel = ({ data }) => {
  let images = [];
  images = data.slice(1, 12).map((elem, i) => {
    const template = (
      <div className="carousel-item">
        <img
          className="d-block w-100"
          src={elem}
          alt={`slide ${i + 1}`}
          onError={event => event.target.setAttribute('src', 'https://www.ispab.org/wp-content/themes/consultix/images/no-image-found-360x260.png')}
        />
      </div>
    );
    return template;
  });

  return (
    <div className="container">
      <div className="row">
        <div id="vehicleCarousel" className="carousel slide col" data-ride="carousel">
          <CarouselPictures data={data} images={images} />
          <CarouselIndicator data={data} images={images} />
          <CarouselButton action="Previous" forClassName="carousel-control-prev" dataSlide="prev" />
          <CarouselButton action="Next" forClassName="carousel-control-next" dataSlide="next" />
        </div>
      </div>
    </div>
  );
};


VehicleDetailImageCarousel.propTypes = {
  data: PropTypes.oneOfType([PropTypes.shape({ body_style: PropTypes.string }), PropTypes.array]),
};

VehicleDetailImageCarousel.defaultProps = {
  data: null,
};

export default VehicleDetailImageCarousel;
