import React, { Component } from 'react';
import axios from 'axios';
import ProductListContainer from './ProductListContainer';

const shortid = require('shortid');

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

  render() {
    const { vehicleListData } = this.state;
    return (
      <div>
        <div className="navbar">Navigation</div>
        <div className="container">
          {vehicleListData.vehicles ? vehicleListData.vehicles.map(elem => (
            <ProductListContainer key={shortid.generate()} data={elem} />
          )) : <h3>Loading...</h3>}
        </div>
      </div>
    );
  }
}

export default BrowseContainer;
