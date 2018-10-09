import React from 'react';
import PropTypes from 'prop-types';

const ProductListContainer = ({ data }) => (
  <div>
    <div>{`${data.model_year} ${data.make} ${data.model}`}</div>
    <div className="imageParent">
      <img className="img-fluid" src={data.chrome_image_url} alt="car" />
    </div>
  </div>
);

ProductListContainer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProductListContainer;
