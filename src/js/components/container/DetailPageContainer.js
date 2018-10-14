import React, { Component } from 'react';
import axios from 'axios';
import DetailPage from '../presentational/DetailPage';
import LoadingScreen from '../presentational/LoadingScreen';

class DetailPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleData: {},
    };
  }

  componentDidMount() {
    const { data, vehicleNumber } = this.props;
    axios.get(`https://private-4e19e-interviewapi3.apiary-mock.com/vehicles/${data.vehicles[vehicleNumber].id}`)
      .then((res) => {
        this.setState({ vehicleData: res.data.data.vehicle });
      })
      .catch(err => alert("It appears that this doesn't exist. Please try again later!"))
  }

  render() {
    const { vehicleData } = this.state;
    const { handleFavorite } = this.props;
    const { handleCheckFavorite } = this.props;
    return (
      <div>
        <div className="detailPageMain">
          {
          vehicleData.image_location_list
          // image is the most visually attracted asset of this page
          // Therefore, loading screen will display until images are loaded
            ? (
              <DetailPage
                vehicleData={vehicleData}
                handleFavorite={handleFavorite}
                handleCheckFavorite={handleCheckFavorite}
              />
            )
            : <LoadingScreen />
          }
        </div>
      </div>
    );
  }
}

export default DetailPageContainer;
