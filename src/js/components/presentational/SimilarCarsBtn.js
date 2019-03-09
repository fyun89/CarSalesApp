import React from 'react';
import PropTypes from 'prop-types';

const SimilarCarsBtn = ({
  className,
  onClick,
  elem,
  converted,
}) => (
  <button
    className={className}
    type="submit"
    onClick={onClick}
  >
    {elem.mileage}
    &nbsp;
    Mi
    <br />
    {converted}
  </button>
);

SimilarCarsBtn.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  elem: PropTypes.objectOf(PropTypes.any),
  converted: PropTypes.string,
};

SimilarCarsBtn.defaultProps = {
  onClick: null,
  elem: null,
  converted: null,
};

export default SimilarCarsBtn;
