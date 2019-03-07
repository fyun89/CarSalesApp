import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({
  pageData,
  handleInput,
  handleSubmit,
  changePage,
  currentPage,
}) => (
  <div className="container paginationContainer">
    <div className="row justify-content-center paginationRow">
      {
        currentPage > 1
          ? <button className="btn-primary" type="button" onClick={() => changePage(currentPage - 1)}>PREV</button>
          : <button className="btn-primary disabled" type="button" disabled>PREV</button>
      }
      <form onSubmit={handleSubmit} key={currentPage}>
        &nbsp;
        <label htmlFor="inputLabel">
          Page &nbsp;
          <input className="pageInput" type="text" defaultValue={currentPage} onChange={handleInput} />
          &nbsp; of &nbsp;
          {pageData.page_count}
          &nbsp;
          <button type="submit" className="btn-primary">Go</button>
        </label>
        &nbsp;
      </form>
      {
        currentPage < pageData.page_count
          ? <button className="btn-primary" type="button" onClick={() => changePage(currentPage + 1)}>Next</button>
          : <button className="btn-primary disabled" type="button" disabled>Next</button>
      }
    </div>
  </div>
);

// used &nbsp due to Airbnb eslint restriction on "jsx-one-expression-per-line"

Pagination.propTypes = {
  pageData: PropTypes.shape({ current_page: PropTypes.number }).isRequired,
  changePage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Pagination;
