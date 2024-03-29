import { memo } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { itemImages } from '../items';
import ItemType from '../types/items';
import Thumbnail from './Thumbnail';
import './stylesheets/Details.css';

function Details({ items }) {
  return (
    <div className="details-component">
      <Outlet />
      <div className="details-component-sidebar">
        {items.map((item) => (
          <Thumbnail
            key={item.itemId}
            image={itemImages[item.imageId]}
            title={item.title}
            itemId={item.itemId}
          />
        ))}
      </div>
    </div>
  );
}

Details.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default memo (Details);
