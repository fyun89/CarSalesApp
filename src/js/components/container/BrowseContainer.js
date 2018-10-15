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
      typePage: null,
    };
    this.handleVehicleClick = this.handleVehicleClick.bind(this);
    this.handleBackToBrowse = this.handleBackToBrowse.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleCheckFavorite = this.handleCheckFavorite.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.handlePrevPage = this.handlePrevPage.bind(this);
    this.handleInputPage = this.handleInputPage.bind(this);
    this.handleInputPageType = this.handleInputPageType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('https://private-4e19e-interviewapi3.apiary-mock.com/vehicles?page={1}')
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
    const newFavorited = this.state.favorited;
    if (newFavorited[elem]) {
      delete newFavorited[elem];
      localStorage.removeItem(elem);
      this.setState({ favorited: newFavorited });
    } else {
      newFavorited[elem] = 'checked';
      this.setState({ favorited: newFavorited });
    }
  }

  handleCheckFavorite(elem) {
    const { favorited } = this.state;
    return favorited[elem] !== undefined;
  }

  handleNextPage() {
    const { currentPage } = this.state;
    const { vehicleListData } = this.state;
    const nextPage = currentPage + 1;
    if (nextPage <= vehicleListData.page_count) {
      this.setState({ currentPage: nextPage });
    }
  }

  handlePrevPage() {
    const { currentPage } = this.state;
    const prevPage = currentPage - 1;
    if (prevPage > 0) {
      this.setState({ currentPage: prevPage });
    }
  }

  handleInputPage(elem) {
    if (elem) {
      this.setState({ currentPage: elem });
    }
  }

  handleInputPageType(e) {
    this.setState({ typePage: e.target.value });
  }

  handleSubmit() {
    const { typePage } = this.state;
    const { vehicleListData } = this.state;
    if (typePage <= vehicleListData.page_count && typePage > 0) {
      this.setState({ currentPage: typePage });
    } else if (typePage > vehicleListData.page_count) {
      alert('Page number must be less than the total page');
      this.setState({ currentPage: vehicleListData.page_count });
      // automatically redirect to highest page
    } else if (typePage < 0) {
      alert('Page number must be greater than 0');
      // automatically redirect to lowest page
      this.setState({ currentPage: 1 });
    } else {
      alert('Please enter a valid page number');
      this.setState({ currentPage: 1 });
    }
  }

  render() {
    const { vehicleListData, selectedVehicleNumber } = this.state;
    // if selectedVehicleNumber is > 0, indicates detail page
    return (
      <div>
        <NavBar
          backToBrowseBtnClick={this.handleBackToBrowse}
          selected={selectedVehicleNumber}
        />
        { selectedVehicleNumber
          ? (
            <DetailPageContainer
              data={vehicleListData}
              vehicleNumber={selectedVehicleNumber - 1}
              handleFavorite={this.handleCheckFavorite}
              handleCheckFavorite={this.handleFavorite}
            />
          )
          // conditional rendering details of selected vehicle
          : (
            <div>
              <ProductListContainer
                vehicleListData={vehicleListData}
                handleClick={this.handleVehicleClick}
                handleFavorite={this.handleFavorite}
                handleCheckFavorite={this.handleCheckFavorite}
              />
              <Pagination
                pageData={vehicleListData}
                nextPage={this.handleNextPage}
                prevPage={this.handlePrevPage}
                inputPage={this.handleInputPage}
                handleInput={this.handleInputPageType}
                handleSubmit={this.handleSubmit}
              />
            </div>
          ) // conditional rendering when vehicle is unselected (to browse list of vehicles)
        }
      </div>
    );
    // Fetch the vehicle index
    // Renders the main page
    // Conditionally renders the List or Detail page
    // PageCount determines which data to display (default: first page)
  }
}

export default BrowseContainer;
