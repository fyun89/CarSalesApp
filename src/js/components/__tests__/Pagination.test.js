import React from 'react';
import { shallow, mount, render } from '../../enzyme';

import Pagination from '../presentational/Pagination';


describe('Pagination tests', () => {
  it('disabled "prev" button renders correctly', () => {
    const wrapper = render(<Pagination
      pageData="1"
    />);
    expect(wrapper.find('.btn-primary').hasClass('disabled')).toBe(true);
  });
  it('disabled "next" button renders correctly', () => {
    const pageData = {
      current_page: 10,
      page_count: 10,
    }
    const wrapper = render(<Pagination
      pageData={pageData}
    />);
    expect(wrapper.find('.btn-primary').hasClass('disabled')).toBe(true);
  });
});
