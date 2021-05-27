import { Link } from 'react-router-dom';
import CategoryDropdown from './categorydropdown';

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
