import React from 'react';

const shortid = require('shortid');

// slider will have containers that scrolls side ways
// Will have "Min Mileage" & "Max Mileage"
// containers will be buttons
const centToDollarConv = (amt) => {
  const amtStr = amt.toString();
  const centPortion = amtStr[amtStr.length - 2] + amtStr[amtStr.length - 1];
  const dollarPortion = amtStr.substr(0, amtStr.length - 2);
  return `${dollarPortion}.${centPortion}`;
};

const MileageSlider = ({ otherData, current, handleSelectMileageOption }) => {
  const { vehicles } = otherData;
  return (
    <div className="scrolling-wrapper">
      {
        vehicles.map((elem) => {
          if (elem.model === current.model
            && elem.trim === current.trim
            && elem.model === current.model) {
            return (
              <button
                key={shortid.generate()}
                className="btn-mileage otherMileage"
                type="submit"
                onClick={() => handleSelectMileageOption(elem.id)}
              >
                {elem.mileage}
                &nbsp;Mi
                <br />
                $
                {centToDollarConv(elem.product_financials[0].monthly_payment_cents)}
              </button>
            );
          }
          return null;
        })
      }
    </div>
  );
};

export default MileageSlider;
