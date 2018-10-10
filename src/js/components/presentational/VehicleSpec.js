import React from 'react';
import PropTypes from 'prop-types';

const VehicleSpec = ({ data, handleClick, index }) => (
  <div>
    <p className="vehicleName"><strong>{`${data.model_year} ${data.make} ${data.model} ${data.trim}`}</strong></p>
    <p className="detailedSpec">
      VIN:
      {data.id}
      <br />
      STK:
      {data.product_financials[0].id}
      <br />
      EXT: N/A
      <br />
      Miles:
      {data.mileage}
      <br />
      INT: N/A
    </p>
    <button type="button" className="btn btn-primary" onClick={() => handleClick(index)}>Check This Vehicle!</button>
  </div>
);

export default VehicleSpec;
