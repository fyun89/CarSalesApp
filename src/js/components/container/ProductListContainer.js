import React from 'react';
import PropTypes from 'prop-types';
import ProductListing from '../presentational/ProductListing';
import LoadingScreen from '../presentational/LoadingScreen';

const shortid = require('shortid');

const ProductListContainer = ({ vehicleListData, handleClick, handleFavorite, handleCheckFavorite }) => (
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
  vehicleListData: PropTypes.object.isRequired,
};

export default ProductListContainer;

/*
todo:
  - move productlistcontainer --> productlist
  - productlistcontainer will contain logics to produce listings

*/
