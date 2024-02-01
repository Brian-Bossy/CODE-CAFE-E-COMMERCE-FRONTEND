import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';//memory router provides a fake History API
import Thumbnail from './Thumbnail';
import { itemImages } from '../items';

describe('Thumbnail', () => {
  it('displays item title and image', () => {
    render(
      <Router>
        <Thumbnail itemId="coffee" title="coffee" image={itemImages.coffee} />
      </Router>,
    );
    //fake DOM
    screen.getByText(/coffee/i);
    screen.getByAltText(/coffee/i);
  });
});