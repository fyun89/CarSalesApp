import React from 'react';
import PropTypes from 'prop-types';

const centToDollarConv = (amt) => {
  const amtStr = amt.toString();
  const centPortion = amtStr[amtStr.length - 2] + amtStr[amtStr.length - 1];
  const dollarPortion = amtStr.substr(0, amtStr.length - 2);
  return `${dollarPortion}.${centPortion}`;
};

const VehicleSpec = ({
  data, handleClick, index, purpose,
}) => { // Airbnb ESLint guidance suggests new line for long curley braces content
  if (purpose === 'productList') {
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
  if (purpose === 'detail') {
    return (
      <div className="content-container detailSpecDescription mt-4">
        <div className="row ml-2 mr-2">
          <div className="col-xs-12 col-sm-6 mt-4">
            <div className="MYMakeInfo">{`${data.model_year} ${data.make}`}</div>
            <div className="modelTrimInfo"><strong>{`${data.model} ${data.trim}`}</strong></div>
            <div className="mileageInfo">
              {`${data.mileage} `}
              Miles
            </div>
            <hr />
            <div className="content-container justify-content-center">
              <div className="row">
                <div className="col col-xs-6">
                  <button type="button" className="btn btn-primary" onClick={() => handleClick(index)}>Choose This Vehicle!</button>
                  &nbsp;
                  <button type="button" className="btn btn-primary" onClick={() => handleClick(index)}>Add To Favorite</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 mt-4">
            <div>Monthly Pymt.</div>
            <div className="monthlyInfo">
              <strong>
              $
                {
                  data.product_financials
                    ? centToDollarConv(data.product_financials[0].monthly_payment_cents)
                    : null
                }
              </strong>
            </div>
            {/*  for a strange reason, financial info from
             the API required conditional to render because
             financial information portion was being loaded slower
             compared to other data within the JSON data  */}
            <div>Starting Pymt.</div>
            <div className="startFeeInfo">
            $
              {
                data.product_financials
                  ? centToDollarConv(data.product_financials[0].start_fee_cents)
                  : null
              }
            </div>
          </div>
        </div>
        <div className="assuranceNotice mt-4 col-md-12">
          <p className="assuranceTitle">Peace of Mind</p>
          <p>
            Every Fair car comes with a limited warranty, routine maintenance,
            and roadside assistance included. Add optional Fair insurance,
            extra miles or excess wear-and-tear protection at checkout and
            bundle it all into one simple, transparent monthly payment.
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export default VehicleSpec;
