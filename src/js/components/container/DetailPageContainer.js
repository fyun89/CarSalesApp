import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import DetailPage from '../presentational/DetailPage';
import LoadingScreen from '../presentational/LoadingScreen';

class DetailPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleData: {},
      otherMileageSelected: false,
    };
    this.handleSelectMileageOption = this.handleSelectMileageOption.bind(this);
  }

  componentDidMount() {
    const { data, vehicleNumber, handleBackToBrowse } = this.props;
    const { otherMileageSelected } = this.state;
    if (!otherMileageSelected) {
      axios.get(`https://private-4e19e-interviewapi3.apiary-mock.com/vehicles/${data.vehicles[vehicleNumber].id}`)
        .then((res) => {
          this.setState({ vehicleData: res.data.data.vehicle });
        })
        .catch((err) => {
          alert("It appears that this doesn't exist. Please try again later!");
          console.log('error at loading componentDidMount in DetailPageContainer: ', err);
          handleBackToBrowse();
        });
    }
  }

  handleSelectMileageOption(elem) {
    axios.get(`https://private-4e19e-interviewapi3.apiary-mock.com/vehicles/${elem}`)
      .then((res) => {
        this.setState({
          vehicleData: res.data.data.vehicle,
          otherMileageSelected: true,
        });
      })
      .catch((err) => {
        alert("It appears that this doesn't exist. Please try again later!");
        console.log('error at loading handleSelectMileageOption: ', err);
      });
  }

  render() {
    const { vehicleData } = this.state;
    const { data } = this.props;
    const { handleFavorite } = this.props;
    const { handleCheckFavorite } = this.props;
    return (
      <div>
        <div className="detailPageMain">
          {
          vehicleData.image_location_list
          // image is the most visually attractive asset of this page
          // therefore, loading screen will display until images are loaded for elegant ui
            ? (
              <DetailPage
                vehicleData={vehicleData}
                otherData={data}
                handleSelectMileageOption={this.handleSelectMileageOption}
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

DetailPageContainer.propTypes = {
  data: PropTypes.shape({ body_style: PropTypes.string }).isRequired,
  vehicleNumber: PropTypes.number.isRequired,
  handleFavorite: PropTypes.func.isRequired,
  handleCheckFavorite: PropTypes.func.isRequired,
};

export default DetailPageContainer;
