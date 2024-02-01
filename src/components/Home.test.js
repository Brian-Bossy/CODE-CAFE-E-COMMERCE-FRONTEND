import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Home from './Home';
import { items } from '../items';

describe('Home', () => {
  it('displays items', () => {
render (
  <Router>
    <Home items={items} />
  </Router>,
);
//If no elements matches the selector, queryAllBy returns an empty array and since it doesn't through an exception, you must include an expect clause
const thumbnails = screen.queryAllByTestId('thumbnail-component');
expect(thumbnails).toHaveLength(items.length);
  })
})