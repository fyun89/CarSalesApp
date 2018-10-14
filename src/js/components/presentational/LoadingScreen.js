import React from 'react';

const LoadingScreen = ({ purpose, vehicleData}) => (
  <div className="container">
    <div className="row justify-content-center">
      <img src="../src/styles/CarLoadingGIF.gif" className="loadingScreen" alt="carLoading" />
    </div>
  </div>
);

export default LoadingScreen;
