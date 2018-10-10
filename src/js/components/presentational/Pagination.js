import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ pageData }) => (
  <div className="pagination">
    Page &nbsp;
    {pageData.current_page}
    &nbsp;
    of &nbsp;
    {pageData.page_count}
  </div>
);

// used &nbsp due to Airbnb eslint restriction on "jsx-one-expression-per-line"

Pagination.propTypes = {
  pageData: PropTypes.object.isRequired,
};

export default Pagination;
