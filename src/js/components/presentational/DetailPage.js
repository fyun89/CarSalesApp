import React from 'react';
import VehiclePictures from './VehiclePictures';
import VehicleSpec from './VehicleSpec';

const DetailPage = ({ vehicleData }) => {
  return (
    <div>
      <div className="container">
        {vehicleData
          ? (
            <div className="row">
              <VehiclePictures data={vehicleData.image_location_list} purpose="detailPage" />
            </div>
          )
          : <div>Loading Images</div>
        }
      </div>
      <VehicleSpec purpose="detail" />
    </div>
  );
};

export default DetailPage;
