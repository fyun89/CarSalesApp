import React from 'react';
import PropTypes from 'prop-types';

const shortid = require('shortid'); // to assign unique keys to elements

const SimilarCarsBtn = ({
  className,
  onClick,
  elem,
  converted,
}) => (
  <button
    key={shortid.generate()}
    className={className}
    type="submit"
    onClick={onClick}
  >
    {elem.mileage}
    &nbsp;
    Mi
    <br />
    $
    {converted}
  </button>
);

SimilarCarsBtn.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  elem: PropTypes.number,
  converted: PropTypes.func,
};

SimilarCarsBtn.defaultProps = {
  onClick: null,
  elem: null,
  converted: null,
};

export default SimilarCarsBtn;
