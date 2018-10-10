import React from 'react';
import VehiclePictures from './VehiclePictures';
import DetailPageCarousel from './DetailPageCarousel';

const DetailPage = ({ vehicleData }) => {
  return (
    <div className="container">
      {vehicleData
        ? (
          <div className="row">
            <DetailPageCarousel data={vehicleData.image_location_list} />
            <VehiclePictures purpose="detailPage" data={vehicleData.chrome_image_url} />
          </div>
        )
        : <div>Loading Details</div>
      }
    </div>
  );
};

export default DetailPage;
