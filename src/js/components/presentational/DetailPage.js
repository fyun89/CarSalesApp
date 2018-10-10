import React from 'react';

const DetailPage = ({ vehicleData }) => {
  //console.log('data to be shown: ', mainImg)
  // <div className="detailPage">
  //   <img src={data.vehicle.chrome_image_url} />
  // </div>
  return (
    <div>
      {vehicleData
        ? (
          <div>
            <img src={vehicleData.chrome_image_url} />
          </div>
        )
        : <div>Loading Details</div>
      }
    </div>
  );
};

export default DetailPage;
