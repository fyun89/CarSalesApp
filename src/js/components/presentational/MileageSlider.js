import React from 'react';
import PropTypes from 'prop-types';
import SimilarCarsBtn from './SimilarCarsBtn';

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
            if (elem.id === current.id) {
              return (
                <SimilarCarsBtn
                  className="btn-currMileage otherMileage currentMileageBtn"
                  onClick={() => handleSelectMileageOption(elem.id)}
                  elem={elem}
                  converted={convertCentToDollar(elem.product_financials[0].monthly_payment_cents)}
                />
              );
            }
            return (
              <SimilarCarsBtn
                className="btn-mileage otherMileage"
                onClick={() => handleSelectMileageOption(elem.id)}
                elem={elem}
                converted={convertCentToDollar(elem.product_financials[0].monthly_payment_cents)}
              />
            );
          }
          return null;
        })
      }
      {[1, 2, 3, 4, 5, 6].map(() => ( // To demonstrate extra similar cars
        <SimilarCarsBtn
          className="btn-mileage otherMileage"
          onClick={() => alert('this is a sample button')}
          elem={{ mileage: 'SAMPLE' }}
          converted="0"
        />
      ))}
    </div>
  );
};

MileageSlider.propTypes = {
  otherData: PropTypes.objectOf(PropTypes.any),
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
  convertCentToDollar: PropTypes.func.isRequired,
};
MileageSlider.defaultProps = {
  otherData: null,
  current: null,
};

export default MileageSlider;
