import React, { Component } from 'react';
import axios from 'axios';
import ProductListContainer from './ProductListContainer';
import Pagination from '../presentational/Pagination';
import DetailPageContainer from './DetailPageContainer';
import NavBar from '../presentational/NavBar';

class BrowseContainer extends Component {
  constructor() {
    super();
    this.state = {
      vehicleListData: {},
      currentPage: 1,
      selectedVehicleNumber: 0,
    };
    this.handleVehicleClick = this.handleVehicleClick.bind(this);
    this.handleBackToMain = this.handleBackToMain.bind(this);
  }

  componentDidMount() {
    axios.get('https://private-4e19e-interviewapi3.apiary-mock.com/vehicles?page={1}')
      .then((res) => {
        this.setState({ vehicleListData: res.data.data });
        console.log('the state: ', this.state.vehicleListData);
      });
  }

  handleVehicleClick(i) {
    const { vehicleListData, currentPage } = this.state
    console.log(`clicked vehicle ${i + 1}`)
    this.setState({
      vehicleListData,
      currentPage,
      selectedVehicleNumber: i + 1,
    });
  }

  handleBackToMain() {
    this.setState({ selectedVehicleNumber: 0 });
  }

  render() {
    const { vehicleListData, currentPage, selectedVehicleNumber } = this.state;
    return (
      <div>
        <NavBar backToMainBtnClick={this.handleBackToMain} />
        { selectedVehicleNumber
          ? (
            <DetailPageContainer
              data={vehicleListData}
              vehicleNumber={selectedVehicleNumber - 1}
            />
          )
          // conditional rendering details of selected vehicle
          : (
            <div>
              <ProductListContainer
                vehicleListData={vehicleListData}
                handleClick={this.handleVehicleClick}
              />
              <Pagination pageData={vehicleListData} />
            </div>
          ) // conditional rendering when vehicle is unselected (to browse list of vehicles)
        }
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
