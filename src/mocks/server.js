import { setupServer } from 'msw/node';
import handlers from './handlers';

// set up requests interception using the given handlers
export default setupServer(...handlers);