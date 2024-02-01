import { rest } from 'msw';
import { items } from '../items';

const handlers = [
  //mock rest method that allows you to mock get method
  rest.get('/api/items', (req, res, ctx) => res(ctx.json(items))),
  rest.get('/api/auth/current-user', (req, res, ctx) => (
    res(ctx.json({ access: 'associate', username: 'Tester'}))
  )),
];

export default handlers;