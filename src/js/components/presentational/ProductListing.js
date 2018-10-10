import React from 'react';
import PropTypes from 'prop-types';
import VehicleSpec from './VehicleSpec';
import VehiclePictures from './VehiclePictures';
import Favorite from './Favorite';

const purpose = "productList"

const ProductListing = ({ data, handleClick, index }) => (
  <div className="row">
    <Favorite className="col-sm" data={data} />
    <VehiclePictures purpose="browsePage" data={data} />
    <VehicleSpec className="col-sm" data={data} handleClick={handleClick} index={index} purpose={purpose} />
    <br />
  </div>
);

ProductListing.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProductListing;
