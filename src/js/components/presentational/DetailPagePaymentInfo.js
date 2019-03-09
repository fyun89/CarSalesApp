import React from 'react';
import PropTypes from 'prop-types';

const DetailPagePaymentInfo = ({ data }) => {
  const centToDollarConv = (amt) => { // reused for VehicleSpec and MileageSlider
    const num = amt;
    const dollars = num / 100;
    return dollars.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  return (
    <div className="col-xs-12 col-sm-6 mt-4">
      <div>Monthly Pymt.</div>
      <div className="monthlyInfo">
        <strong>
          {
            data
              ? centToDollarConv(data.monthly_payment_cents)
              : null
          }
        </strong>
      </div>
      {/*  financial info from the API
        required conditional to render because
        financial information portion was being loaded slower
        compared to other data through the API */}
      <div>Starting Pymt.</div>
      <div className="startFeeInfo">
        {
          data
            ? centToDollarConv(data.start_fee_cents)
            : null
        }
      </div>
    </div>
  );
};

DetailPagePaymentInfo.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    monthly_payment_cents: PropTypes.number.isRequired,
    start_fee_cents: PropTypes.number.isRequired,
  }).isRequired,
};

export default DetailPagePaymentInfo;
