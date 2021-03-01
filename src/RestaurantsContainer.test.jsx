import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
    }));
  });
  it('renders name of the restaurants', () => {
    const { container } = render((
      <RestaurantsContainer />
    ));

    expect(container).toHaveTextContent('마법사주방');
  });
});
