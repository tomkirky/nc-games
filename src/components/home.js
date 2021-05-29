import { Link } from 'react-router-dom';
import CategoryDropdown from './CategoryDropdown';

const Home = ({ categories, setCategory, setCategories }) => {
  return (
    <main>
      <div className="Home-page">
        <h2>FIND REVIEWS BY GAME CATEGORY</h2>
      </div>
      <div className="Home-page">
        <CategoryDropdown
          setCategories={setCategories}
          categories={categories}
          setCategory={setCategory}
        />
      </div>
      <div className="Home-page">
        <video
          playsInline="playsinline"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
          className="w-75 pb-3"
        >
          <source src="/video/vid.mp4" type="video/mp4" />
        </video>
        <Link
          to="/reviews"
          onClick={() => {
            setCategory('');
          }}
        >
          <h2 className="View-all">VIEW ALL REVIEWS</h2>
        </Link>
      </div>
    </main>
  );
};

export default Home;
