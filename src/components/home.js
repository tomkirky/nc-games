import { useEffect } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { getCategories } from '../utils/api';
import { Link } from 'react-router-dom';

const Home = ({ categories, setCategories, category, setCategory }) => {
  useEffect(() => {
    getCategories().then((categoriesArray) => {
      setCategories(categoriesArray);
    });
  }, [setCategories]);

  return (
    <main>
      <h2>FIND REVIEWS BY GAME CATEGORY</h2>
      <DropdownButton id="dropdown-basic-button" title="CHOOSE CATEGORY">
        {categories.map((categoryObj) => {
          return (
            <Dropdown.Item
              as={Link}
              to="/reviews"
              key={categoryObj.slug}
              onClick={() => {
                setCategory(categoryObj.slug);
              }}
            >
              {categoryObj.slug}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
      <Link
        to="/reviews"
        onClick={() => {
          setCategory('');
        }}
      >
        <h2 className="View-all">VIEW ALL REVIEWS</h2>
      </Link>
    </main>
  );
};

export default Home;
