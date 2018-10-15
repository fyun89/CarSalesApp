import React from 'react';
import PropTypes from 'prop-types';

const shortid = require('shortid'); // to assign unique keys to mapped elements

const MileageSlider = ({
  otherData,
  current,
  handleSelectMileageOption,
  convertCentToDollar,
}) => {
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
                {convertCentToDollar(elem.product_financials[0].monthly_payment_cents)}
              </button>
            );
          }
          return null;
        })
      }
    </div>
  );
};

MileageSlider.propTypes = {
  handleSelectMileageOption: PropTypes.func.isRequired,
  convertCentToDollar: PropTypes.func.isRequired,
};

export default MileageSlider;
