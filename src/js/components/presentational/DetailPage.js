import React from 'react';
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

export default DetailPage;
