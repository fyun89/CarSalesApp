import React, { Component } from 'react';
import axios from 'axios';

class DetailPageContainer extends Component {
  constructor() {
    super();
    this.state = {
      vehicleData: {},
    };
  }

  componentDidMount() {
    axios.get(`https://interviewapi3.apiblueprint.org/vehicles/${this.props.data}`)
      .then((res) => {
        this.setState({ vehicleData: res.data.data });
        console.log('the state: ', this.state.vehicleData);
      });
  }

  render() {
    const { vehicleListData } = this.state;
    return (
      <div></div>
  }
}

export default DetailPageContainer;
