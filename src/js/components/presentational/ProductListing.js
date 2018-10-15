import React from 'react';
import PropTypes from 'prop-types';
import VehicleSpec from './VehicleSpec';
import VehiclePictures from './VehiclePictures';
import Favorite from './Favorite';

const purpose = 'productList';

const ProductListing = ({
  data,
  handleClick,
  index,
  handleFavorite,
  handleCheckFavorite,
}) => (
  <div className="row">
    <Favorite
      className="col-sm"
      vinNum={data.id}
      index={index}
      handleFavorite={handleFavorite}
      handleCheckFavorite={handleCheckFavorite}
    />
    <VehiclePictures purpose="browsePage" data={data} />
    <VehicleSpec
      className="col-sm"
      data={data}
      handleClick={handleClick}
      index={index}
      purpose={purpose}
    />
    <br />
  </div>
);

ProductListing.propTypes = {
  data: PropTypes.shape({ current_page: PropTypes.number }).isRequired,
  handleClick: PropTypes.func,
  index: PropTypes.number,
  handleFavorite: PropTypes.func,
  handleCheckFavorite: PropTypes.func,
};

export default ProductListing;
