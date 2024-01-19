import Croissant from './croissant.jpg';
import Coffee from './coffee.jpg';
import Cookie from './cookie.jpg';
import Cupcake from './cupcake.jpg';
import FrenchPress from './french-press.jpg';
import IcedCoffee from './iced-coffee.jpg';
import Latte from './latte.jpg';
import Milk from './milk.jpg';
import Sandwich from './sandwich.jpg';
import Tea from './tea.jpg';

export const itemImages = {
  coffee: Coffee,
  cookie: Cookie,
  croissant: Croissant,
  cupcake: Cupcake,
  'french-press': FrenchPress,
  'iced-coffee': IcedCoffee,
  latte: Latte,
  milk: Milk,
  sandwich: Sandwich,
  tea: Tea,
};

export const items = [
  {
    itemId: 'coffee',
    imageId: 'coffee',
    title: 'Drip Coffee',
    price: 1,
    description: '',
    salePrice: 0,
  },
  {
    itemId: 'cookie',
    imageId: 'cookie',
    title: 'Cookie',
    price: 0.99,
    description: 'May contain nuts.',
    salePrice: 0.50,
  },
  {
    itemId: 'croissant',
    imageId: 'croissant',
    title: 'Croissant',
    price: 1.50,
  },
  {
    itemId: 'cupcake',
    imageId: 'cupcake',
    title: 'Cupcake',
    price: 2.50,
  },
  {
    itemId: 'french-press',
    imageId: 'french-press',
    title: 'French Press',
    price: 1,
  },
  {
    itemId: 'iced-coffee',
    imageId: 'iced-coffee',
    title: 'Iced Coffee',
    price: 1.25,
  },
  {
    itemId: 'latte',
    imageId: 'latte',
    title: 'Latte',
    price: 1.75,
  },
  {
    itemId: 'milk',
    imageId: 'milk',
    title: 'Chocolate Milk',
    price: 0.50,
  },
  {
    itemId: 'sandwich',
    imageId: 'sandwich',
    title: 'Sandwich',
    price: 6,
  },
  {
    itemId: 'tea',
    imageId: 'tea',
    title: 'Tea',
    price: 1,
  },
];
