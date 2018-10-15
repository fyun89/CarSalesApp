import React, { Component } from 'react';
import Pagination from '../presentational/Pagination';

class PaginationContainer extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
    };
    this.handleNextPage = this.handleNextPage.bind(this);
  }

  handleNextPage() {
    const { currentPage } = this.state;
    const nextPage = currentPage + 1;
    this.setState({ currentPage: nextPage });
  }

  handlePrevPage() {
    const { currentPage } = this.state;
    const prevPage = currentPage - 1;
    this.setState({ currentPage: prevPage });
  }

  handleInputPage(elem) {
    if (elem) {
      this.setState({ currentPage: elem });
    }
  }

  render() {
    const { pageData } = this.props;
    return (
      <Pagination pageData={pageData} />
    );
  }
}

export default PaginationContainer;
