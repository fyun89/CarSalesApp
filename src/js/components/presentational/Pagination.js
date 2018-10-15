import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({
  pageData,
  nextPage,
  prevPage,
  handleInput,
  handleSubmit,
}) => (
  <div className="container">
    <div className="row justify-content-center">
      {
        pageData.current_page !== 1
          ? <button className="btn-primary" type="button" onClick={prevPage}>PREV</button>
          : <button className="btn-primary" type="button" disabled>PREV</button>
      }
      <form onSubmit={handleSubmit}>
        &nbsp;
        <label htmlFor="inputLabel">
          Page &nbsp;
          <input className="pageInput" type="text" defaultValue={pageData.current_page} onChange={handleInput} />
          &nbsp; of &nbsp;
          {pageData.page_count}
          &nbsp;
          <button type="submit" className="btn-primary">Go</button>
        </label>
        &nbsp;
      </form>
      {
        pageData.current_page < pageData.page_count
          ? <button className="btn-primary" type="button" onClick={nextPage}>Next</button>
          : <button className="btn-primary" type="button" disabled>Next</button>
      }
    </div>
  </div>
);

// used &nbsp due to Airbnb eslint restriction on "jsx-one-expression-per-line"

Pagination.propTypes = {
  pageData: PropTypes.object.isRequired,
};

export default Pagination;
