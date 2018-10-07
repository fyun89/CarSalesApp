import React from "react";
import PropTypes from "prop-types";

const ProductList = ({test}) => (
  <div>
    <div>This should appear as ProductList: {test}</div>
  </div>
);

ProductList.propTypes = {
  test: PropTypes.string.isRequired
};

export default ProductList