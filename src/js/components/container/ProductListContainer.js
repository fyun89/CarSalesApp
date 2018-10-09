import React from 'react';
import PropTypes from 'prop-types';
import VehicleSpec from '../presentational/VehicleSpec';

const ProductListContainer = ({ data }) => (
  <div>
    <div>{`${data.model_year} ${data.make} ${data.model}`}</div>
    <div className="imageParent">
      <img className="img-fluid" src={data.chrome_image_url} alt="car" />
    </div>
    <VehicleSpec />
  </div>
);

ProductListContainer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProductListContainer;

/*
todo:
  - move productlistcontainer --> productlist
  - productlistcontainer will contain logics to produce listings

*/
