import React, { Component } from 'react';
import axios from 'axios';
import DetailPage from '../presentational/DetailPage'

class DetailPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleData: {},
    };
  }

  componentDidMount() {
    const { data, vehicleNumber } = this.props
    axios.get(`https://private-4e19e-interviewapi3.apiary-mock.com/vehicles/${data.vehicles[vehicleNumber].id}`)
      .then((res) => {
        console.log('data at detail: ', res.data.data.vehicle);
        this.setState({ vehicleData: res.data.data.vehicle });
      });
  }

  render() {
    const { vehicleData } = this.state;
    console.log('detailpagecontainer data: ', vehicleData.chrome_image_url);
    return (
      <div>
        {
        vehicleData
          ? <DetailPage vehicleData={vehicleData} />
          : <div>Loading Data</div>
        }
      </div>
    );
  }
}

export default DetailPageContainer;
