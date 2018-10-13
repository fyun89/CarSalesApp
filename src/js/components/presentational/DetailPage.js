import React from 'react';
import VehiclePictures from './VehiclePictures';
import VehicleSpec from './VehicleSpec';

const DetailPage = ({ vehicleData }) => (
  <div>
    {vehicleData
      ? (
        <div>
          <div className="container">
            <div className="row">
              <VehiclePictures data={vehicleData.image_location_list} purpose="detailPage" />
            </div>
          </div>
          <VehicleSpec data={vehicleData} purpose="detail" />
        </div>
      )
      : <div>Loading Images</div>
    }
  </div>
);

export default DetailPage;
