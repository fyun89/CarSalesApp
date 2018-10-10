import React from 'react';
import PropTypes from 'prop-types';

const centToDollarConv = (amt) => {
  const amtStr = amt.toString();
  const centPortion = amtStr[amtStr.length - 2]+amtStr[amtStr.length - 1];
  const dollarPortion = amtStr.substr(0, amtStr.length - 2);
  return `${dollarPortion}.${centPortion}`;
}

const VehicleSpec = ({ data, handleClick, index, purpose }) => {
  if (purpose === "productList") {
    return (
      <div>
        <p className="vehicleName"><strong>{`${data.model_year} ${data.make} ${data.model} ${data.trim}`}</strong></p>
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
          Start Fee: $
          {centToDollarConv(data.product_financials[0].start_fee_cents)}
          <br />
          Monthly Fee: $
          {centToDollarConv(data.product_financials[0].monthly_payment_cents)}
        </p>
        <button type="button" className="btn btn-primary" onClick={() => handleClick(index)}>Check This Vehicle!</button>
      </div>
    );
  }
  if (purpose === "detail") {
    return (
      <div className="detailSpecDescription">
        <div>Model Year, Make</div>
        <div>Model, Trim</div>
        <div>Mileage</div>
        <div>Monthly Pmt</div>
        <div>Starting Fee</div> 
        <div>Peace of Mind</div>
        <div>
          Every Fair car comes with a limited warranty, routine maintenance,$nbsp;
          and roadside assistance included. Add optional Fair insurance,$nbsp;
          extra miles or excess wear-and-tear protection at checkout and$nbsp;
          bundle it all into one simple, transparent monthly payment.
        </div>
      </div>
    )
  }
};

export default VehicleSpec;
