import React from "react";
import PropTypes from "prop-types";

const ProductList = ({test}) => (
  <div>
    <div>This should appear as ProductList: {test}</div>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown button
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
  </div>
);

ProductList.propTypes = {
  test: PropTypes.string.isRequired
};

export default ProductList