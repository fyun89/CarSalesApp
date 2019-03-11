import React from 'react';
import PropTypes from 'prop-types';
import SimilarCarsBtn from './SimilarCarsBtn';

const shortid = require('shortid');

const MileageSlider = ({
  vehicles,
  current,
  otherData,
  handleSelectMileageOption,
}) => {
  const centToDollarConv = (amt) => {
    const num = amt;
    const dollars = num / 100;
    return dollars.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };
  console.log('otherData', otherData)

  return (
    <div className="mileageInfo">
      <strong>
        {`${current.mileage} `}
          Miles
      </strong>
      <div className="otherMileageOptions">
        Other Mileage Options:
        <div className="scrolling-wrapper">
          {
            vehicles.map((elem, i) => {
              if (elem.model === current.model
                && elem.trim === current.trim
                && elem.model === current.model) {
                if (elem.id === current.id) {
                  return (
                    <SimilarCarsBtn
                      key={shortid.generate()}
                      className="btn-currMileage otherMileage currentMileageBtn"
                      onClick={() => handleSelectMileageOption(elem.id)}
                      elem={elem}
                      converted={centToDollarConv(elem.product_financials[0].monthly_payment_cents)}
                    />
                  );
                }
                return (
                  <SimilarCarsBtn
                    key={shortid.generate()}
                    className="btn-mileage otherMileage"
                    onClick={() => handleSelectMileageOption(i, elem.id)}
                    elem={elem}
                    converted={centToDollarConv(elem.product_financials[0].monthly_payment_cents)}
                  />
                );
              }
              return null;
            })
          }
          {[1, 2, 3, 4, 5, 6].map(() => ( // To show more similar vehicles to demonstrate slider for demo purpose
            <SimilarCarsBtn
              key={shortid.generate()}
              className="btn-mileage otherMileage"
              onClick={() => alert('this is a sample button')}
              elem={{ mileage: 'DEMO' }}
              converted="$100"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

MileageSlider.propTypes = {
  vehicles: PropTypes.arrayOf(PropTypes.object),
  current: PropTypes.shape({
    body_style: PropTypes.string,
    categories: PropTypes.array,
    chrome_image_url: PropTypes.string,
    exterior_color_info: PropTypes.objectOf(PropTypes.any),
    id: PropTypes.string,
    image_location_list: PropTypes.array,
    make: PropTypes.string,
    mileage: PropTypes.number,
    model: PropTypes.string,
    model_year: PropTypes.string,
    new_used_flag: PropTypes.string,
    product_financials: PropTypes.array,
    trim: PropTypes.string,
  }),
  handleSelectMileageOption: PropTypes.func.isRequired,
};
MileageSlider.defaultProps = {
  vehicles: null,
  current: null,
};

export default MileageSlider;
