import React from 'react';
import PropTypes from 'prop-types';
import MileageSlider from './MileageSlider';
import DetailPagePaymentInfo from './DetailPagePaymentInfo';
import AssuranceNotice from './AssuranceNotice';
import DetailPageUserAction from './DetailPageUserAction';

const VehicleSpecForDetailPage = ({
  data,
  otherData,
  handleFavorite,
  handleCheckFavorite,
  handleSelectMileageOption,
}) => (
  <div className="content-container detailSpecDescription mt-4">
    <div className="row ml-2 mr-2">
      <div className="col-xs-12 col-sm-6 mt-4">
        <div className="MYMakeInfo">{`${data.model_year} ${data.make}`}</div>
        <div className="modelTrimInfo"><strong>{`${data.model} ${data.trim}`}</strong></div>
        <MileageSlider
          current={data}
          vehicles={otherData.vehicles}
          handleSelectMileageOption={handleSelectMileageOption}
        />
        <hr />
        <DetailPageUserAction
          data={data}
          handleFavorite={elem => handleFavorite(elem)}
          handleCheckFavorite={elem => handleCheckFavorite(elem)}
        />
      </div>
      <DetailPagePaymentInfo data={data.product_financials[0]} />
    </div>
    <AssuranceNotice />
  </div>
);

VehicleSpecForDetailPage.propTypes = {
  data: PropTypes.shape({ body_style: PropTypes.string }),
  otherData: PropTypes.shape({ current_page: PropTypes.number }),
  handleFavorite: PropTypes.func,
  handleCheckFavorite: PropTypes.func,
  handleSelectMileageOption: PropTypes.func,
};

VehicleSpecForDetailPage.defaultProps = {
  data: null,
  otherData: null,
  handleFavorite: null,
  handleCheckFavorite: null,
  handleSelectMileageOption: null,
};

export default VehicleSpecForDetailPage;
