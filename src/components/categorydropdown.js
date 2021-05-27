import { useEffect } from 'react';
import DropdownButton from 'react-bootstrap/esm/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { getCategories } from '../utils/api';
import { Link } from 'react-router-dom';
import formatDropdownString from '../utils/sorting';

const CategoryDropdown = ({ setCategories, categories, setCategory }) => {
  useEffect(() => {
    getCategories().then((categoriesArray) => {
      setCategories(categoriesArray);
    });
  }, [setCategories]);

  return (
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
            {formatDropdownString(categoryObj.slug)}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  );
};

export default CategoryDropdown;
