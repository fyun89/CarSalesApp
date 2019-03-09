import React from 'react';
import PropTypes from 'prop-types';
import VehicleSpecForProductList from './VehicleSpecForProductList';
import Favorite from './Favorite';

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
    {data ? (
      <div className="imageParent col-12 col-md-7 col-xl-7">
        <img className="img-fluid" src={data.chrome_image_url} alt="Vehicle" />
      </div>
    )
      : null
    }
    <VehicleSpecForProductList
      data={data}
      handleClick={handleClick}
      index={index}
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

ProductListing.defaultProps = {
  handleClick: null,
  index: null,
  handleFavorite: null,
  handleCheckFavorite: null,
};

export default ProductListing;
