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
      favorited: {},
      typePage: 1,
    };
    this.handleVehicleClick = this.handleVehicleClick.bind(this);
    this.handleBackToBrowse = this.handleBackToBrowse.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleCheckFavorite = this.handleCheckFavorite.bind(this);
    this.handleInputPageType = this.handleInputPageType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePageButton = this.handlePageButton.bind(this);
  }

  componentDidMount() {
    const { currentPage } = this.state;
    axios.get(`https://private-4e19e-interviewapi3.apiary-mock.com/vehicles?page={${currentPage}}`)
      .then((res) => {
        this.setState({
          vehicleListData: res.data.data,
          favorited: localStorage,
        });
      });
  }

  handleVehicleClick(i) {
    const { vehicleListData, currentPage } = this.state;
    this.setState({
      vehicleListData,
      currentPage,
      selectedVehicleNumber: i + 1,
    });
  }

  handleBackToBrowse() {
    this.setState({ selectedVehicleNumber: 0 });
  }

  handleFavorite(elem) {
    const { favorited } = this.state;
    if (favorited[elem]) {
      delete favorited[elem];
      localStorage.removeItem(elem);
      this.setState({ favorited });
    } else {
      favorited[elem] = 'checked';
      this.setState({ favorited });
    }
  }

  handleCheckFavorite(elem) {
    const { favorited } = this.state;
    return favorited[elem] !== undefined;
  }

  handlePageButton(page) { // new
    window.scrollTo(0, 0);
    const { vehicleListData } = this.state;
    if (page > 0 && page <= vehicleListData.page_count) {
      // this.setState({ currentPage: page });
      axios.get(`https://private-4e19e-interviewapi3.apiary-mock.com/vehicles?page={${page}}`)
        .then((res) => {
          this.setState({
            currentPage: page,
            vehicleListData: res.data.data,
          });
        });
    } else if (page < 0) {
      alert('You are at the beginning of the page');
    } else if (page > vehicleListData.page_count) {
      alert('You are at the last page');
    }
  }

  handleInputPageType(e) {
    this.setState({ typePage: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    const { typePage } = this.state;
    const { vehicleListData } = this.state;
    if (typePage <= vehicleListData.page_count && typePage > 0) {
      this.setState({ currentPage: typePage });
    } else if (typePage > vehicleListData.page_count) {
      alert('Page number must be less than the total page');
      // automatically redirect to highest page
      this.setState({ currentPage: vehicleListData.page_count });
    } else if (typePage < 0 || typeof typePage !== 'number') {
      // automatically redirect to lowest page
      e.preventDefault();
      alert('Page number must be a number greater than 0');
    }
  }

  render() {
    const { vehicleListData, selectedVehicleNumber, currentPage } = this.state;
    // if selectedVehicleNumber is > 0, indicates detail page
    return (
      <div>
        <NavBar
          backToBrowseBtnClick={this.handleBackToBrowse}
          selected={selectedVehicleNumber}
        />
        { selectedVehicleNumber
          ? (// conditional rendering details of selected vehicle
            <DetailPageContainer
              data={vehicleListData}
              vehicleNumber={selectedVehicleNumber - 1}
              handleFavorite={this.handleCheckFavorite}
              handleCheckFavorite={this.handleFavorite}
            />
          )
          : (// conditional rendering when vehicle is unselected (to browse list of vehicles)
            <div>
              <ProductListContainer
                vehicleListData={vehicleListData}
                handleClick={this.handleVehicleClick}
                handleFavorite={this.handleFavorite}
                handleCheckFavorite={this.handleCheckFavorite}
              />
              <Pagination
                pageData={vehicleListData}
                currentPage={currentPage}
                nextPage={this.handleNextPage}
                prevPage={this.handlePrevPage}
                inputPage={this.handleInputPage}
                handleInput={this.handleInputPageType}
                handleSubmit={this.handleSubmit}
                changePage={this.handlePageButton}
              />
            </div>
          )
        }
      </div>
    );
    // Fetch the vehicle index
    // Renders the main page
    // Consistently renders the navigation bar at the top
    // Conditionally renders the List or Detail page
    // PageCount determines which data to display (default: first page)
  }
}

export default BrowseContainer;
