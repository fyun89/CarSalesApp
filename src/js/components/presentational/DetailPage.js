import React from 'react';
import PropTypes from 'prop-types';
import VehicleDetailImageCarousel from './VehicleDetailImageCarousel';
import VehicleSpecForDetailPage from './VehicleSpecForDetailPage';

const DetailPage = ({
  vehicleData,
  otherData,
  handleFavorite,
  handleCheckFavorite,
  handleSelectMileageOption,
}) => (
  <div>
    {vehicleData
      ? (
        <div>
          <VehicleDetailImageCarousel
            data={vehicleData.image_location_list}
          />
          <VehicleSpecForDetailPage
            data={vehicleData}
            otherData={otherData}
            handleFavorite={handleFavorite}
            handleCheckFavorite={handleCheckFavorite}
            handleSelectMileageOption={handleSelectMileageOption}
          />
        </div>
      )
      : null
    }
  </div>
);

DetailPage.propTypes = {
  vehicleData: PropTypes.shape({ body_style: PropTypes.string }).isRequired,
  otherData: PropTypes.shape({ current_page: PropTypes.number }).isRequired,
  handleFavorite: PropTypes.func.isRequired,
  handleCheckFavorite: PropTypes.func.isRequired,
  handleSelectMileageOption: PropTypes.func.isRequired,
};

export default DetailPage;
