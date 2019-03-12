import React from 'react';
import PropTypes from 'prop-types';

const VehicleSpecForProductList = ({ data, handleClick, index }) => {
  const centToDollarConv = (amt) => { // move this to browse for reuse
    const num = amt;
    const dollars = num / 100;
    return dollars.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  return (
    <div className="col-12 col-md-3 col-xl-3">
      <p className="vehicleName">
        {`${data.model_year} ${data.make} ${data.model} ${data.trim}`}
      </p>
      <p className="detailedSpec">
        VIN: &nbsp;
        {data.id}
        <br />
        STK: &nbsp;
        {data.product_financials[0].id}
        <br />
        Miles: &nbsp;
        {data.mileage}
        <br />
        Start Fee:
        {centToDollarConv(data.product_financials[0].start_fee_cents)}
        <br />
        Monthly Fee:
        {centToDollarConv(data.product_financials[0].monthly_payment_cents)}
      </p>
      <button type="button" className="btn btn-primary" onClick={() => handleClick(index, data.id)}>Check This Vehicle!</button>
    </div>
  );
};

VehicleSpecForProductList.propTypes = {
  data: PropTypes.shape({ body_style: PropTypes.string }),
  handleClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

VehicleSpecForProductList.defaultProps = {
  data: null,
};

export default VehicleSpecForProductList;
