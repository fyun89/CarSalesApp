import React from 'react';
import PropTypes from 'prop-types';

const VehicleSpec = ({ data, handleClick, index }) => (
  <div>
    <p className="vehicleName"><strong>{`${data.model_year} ${data.make} ${data.model} ${data.trim}`}</strong></p>
    <p className="detailedSpec">
      VIN: &nbsp;
      {data.id}
      <br />
      STK: &nbsp;
      {data.product_financials[0].id}
      <br />
      EXT: &nbsp;
      N/A
      <br />
      Miles: &nbsp;
      {data.mileage}
      <br />
      INT: &nbsp;
      N/A
    </p>
    <button type="button" className="btn btn-primary" onClick={() => handleClick(index)}>Check This Vehicle!</button>
  </div>
);

export default VehicleSpec;
