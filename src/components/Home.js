import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import { itemImages } from '../items';
import 'animate.css/animate.min.css';
import './Home.css';
import ItemType from '../types/items';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Reviews from './Reviews';



function Home({ items }) {
  AOS.init();
  return (
    <>
    <div className="home-component">
      {items.map((item) => (
        <Thumbnail
          key={item.itemId}
          itemId={item.itemId}
          image={itemImages[item.imageId]}
          title={item.title}
        />
      ))}
      
    </div>
    <Reviews />
    </>
  );
}

Home.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default Home;
