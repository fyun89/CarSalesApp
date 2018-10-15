import React from 'react';
import { render } from '../../enzyme';

import NavBar from '../presentational/NavBar';

describe('Pagination tests', () => {
  it('disabled "prev" button renders correctly', () => {
    const wrapper = render(<NavBar
      selected="true"
    />);
    expect(wrapper.find('.btn')).toBeDefined();
  });
});
