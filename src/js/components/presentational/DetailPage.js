import React from 'react';
import VehiclePictures from './VehiclePictures';
import VehicleSpec from './VehicleSpec';
import LoadingScreen from './LoadingScreen';

const DetailPage = ({ vehicleData, handleFavorite, handleCheckFavorite }) => (
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
            purpose="detail"
            handleFavorite={handleFavorite}
            handleCheckFavorite={handleCheckFavorite}
          />
        </div>
      )
      : null
    }
  </div>
);

export default DetailPage;
