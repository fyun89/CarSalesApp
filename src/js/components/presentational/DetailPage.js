import React from 'react';
import PropTypes from 'prop-types';
import VehiclePictures from './VehiclePictures';
import VehicleSpec from './VehicleSpec';

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
          <div className="container">
            <div className="row">
              <VehiclePictures data={vehicleData.image_location_list} purpose="detailPage" />
            </div>
          </div>
          <VehicleSpec
            data={vehicleData}
            otherData={otherData}
            purpose="detail"
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
