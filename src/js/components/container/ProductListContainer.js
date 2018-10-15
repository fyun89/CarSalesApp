import React from 'react';
import PropTypes from 'prop-types';
import ProductListing from '../presentational/ProductListing';
import LoadingScreen from '../presentational/LoadingScreen';

const shortid = require('shortid');

const ProductListContainer = ({
  vehicleListData,
  handleClick,
  handleFavorite,
  handleCheckFavorite,
}) => (
  <div className="container">
    {vehicleListData.vehicles
      ? vehicleListData.vehicles.map((elem, i) => (
        <ProductListing
          key={shortid.generate()}
          data={elem}
          handleClick={handleClick}
          handleFavorite={handleFavorite}
          handleCheckFavorite={handleCheckFavorite}
          index={i}
        />
      ))
      : <LoadingScreen />
    }
  </div>
);

ProductListContainer.propTypes = {
  vehicleListData: PropTypes.shape({ current_page: PropTypes.number }).isRequired,
  handleClick: PropTypes.func.isRequired,
  handleFavorite: PropTypes.func.isRequired,
  handleCheckFavorite: PropTypes.func.isRequired,
};

export default ProductListContainer;
