import React, { Component } from 'react';
import axios from 'axios';
import ProductListContainer from './ProductListContainer';
import Pagination from '../presentational/Pagination';

class BrowseContainer extends Component {
  constructor() {
    super();
    this.state = {
      vehicleListData: {},
    };
  }

  componentDidMount() {
    axios.get('https://private-4e19e-interviewapi3.apiary-mock.com/vehicles?page={1}')
      .then((res) => {
        this.setState({ vehicleListData: res.data.data });
        console.log('the state: ', this.state.vehicleListData);
      });
  }

  handleVehicleClick(i) {
    console.log(`clicked vehicle ${i}`)
  }

  render() {
    const { vehicleListData } = this.state;
    return (
      <div>
        <div className="navbar">Navigation</div>
        <ProductListContainer vehicleListData={vehicleListData} handleClick={this.handleVehicleClick} />
        <Pagination pageData={vehicleListData} />
      </div>
    );
    // Fetch the vehicle index
    // Decision: MUST FETCH FOR EACH SPECIFIC VEHICLE
    // Renders the main page
    // Conditionally renders the List or Detail page
    // PageCount determines which data to display (default: first page)
  }
}

export default BrowseContainer;
