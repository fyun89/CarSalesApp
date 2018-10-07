import React, { Component } from "react";
import ProductListContainer from "./ProductListContainer";
import axios from "axios";

class BrowseContainer extends Component {
  constructor() {
    super();
    this.state = {
      vehicleListData: {}
    };

  }
  
  componentDidMount() {
    axios.get('https://private-4e19e-interviewapi3.apiary-mock.com/vehicles?page={1}')
    .then((res) => {
      this.setState({vehicleListData: res.data.data});
      console.log('the state: ', this.state.vehicleListData);
    })
  };


  render () {
    return(
      <div>
        <div className="navbar">Navigation</div>
        <div className="container">
          <ProductListContainer test="passed prop" />
        </div>
      </div>
    )
  }
}

export default BrowseContainer;
