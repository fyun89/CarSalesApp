import React, { Component } from "react";
import ReactDOM from "react-dom";
import ProductList from "../presentational/ProductList";

class BrowseContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }
  render () {
    return(
      <ProductList id="car-list" test="passed prop" />
    )
  }
}

export default BrowseContainer;

const mainApp = document.getElementById("app");
mainApp ? ReactDOM.render(<BrowseContainer />, mainApp) : false;