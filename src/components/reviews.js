import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getReviews } from '../utils/api';
import formatDropdownString from '../utils/formatWords';
import CategoryDropdown from './CategoryDropdown';
import DropdownButton from 'react-bootstrap/esm/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import formatDate from '../utils/date';
import { Nav } from 'react-bootstrap';
import { ChatRight, Heart } from 'react-bootstrap-icons';

const Reviews = ({ category, setCategory, categories, setCategories }) => {
  const [reviews, setReviews] = useState([]);
  const [sortBy, setSortBy] = useState('SORT BY');
  const [order, setOrder] = useState('ORDER BY');

  useEffect(() => {
    getReviews(category, sortBy, order).then((reviewsArr) => {
      setReviews(reviewsArr);
    });
  }, [setReviews, category, order, sortBy]);

  const sortOptions = ['created_at', 'comment_count', 'votes'];
  const orderOptions = ['desc', 'asc'];

  return (
    <main>
      <h1>{formatDropdownString(category) || 'All Items'}</h1>
      <Nav inline="true" className="justify-content-center mt-4 pb-4">
        <CategoryDropdown
          setCategories={setCategories}
          categories={categories}
          setCategory={setCategory}
        />
        <DropdownButton
          id="dropdown-basic-button"
          title={formatDropdownString(sortBy)}
          className="pr-2"
        >
          {sortOptions.map((sortString) => {
            return (
              <Dropdown.Item
                key={sortString}
                onClick={() => {
                  setSortBy(sortString);
                }}
              >
                {formatDropdownString(sortString)}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
        <DropdownButton
          id="dropdown-basic-button"
          title={formatDropdownString(order)}
        >
          {orderOptions.map((orderString) => {
            return (
              <Dropdown.Item
                key={orderString}
                onClick={() => {
                  setOrder(orderString);
                }}
              >
                {formatDropdownString(orderString)}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
      </Nav>
      <Link
        to="/reviews"
        onClick={() => {
          setCategory('');
        }}
      >
        <h3 className="View-all">VIEW ALL REVIEWS</h3>
      </Link>
      <ul>
        {reviews.map((game) => {
          return (
            <li key={game.review_id}>
              <Link to={`/reviews/${game.review_id}`}>
                <img
                  src={game.review_img_url}
                  alt="game"
                  className="Review-image"
                ></img>
                <h3>{game.title}</h3>
              </Link>
              <h3>{game.owner}</h3>
              <p>{formatDate(game.created_at)}</p>
              <p>
                <Heart className="mb-1 mr-1" /> {game.votes}{' '}
                <ChatRight className="mb-1 mr-1 ml-2" /> {game.comment_count}
              </p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Reviews;
