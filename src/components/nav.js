import IsLoggedIn from './login';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Nav = ({ user }) => {
  return (
    <Navbar bg="light" variant="light" expand="md">
      <Navbar.Brand as={Link} to="/" className="p-1">
        NC Ratings
      </Navbar.Brand>
      <Navbar.Text as={Link} to="/reviews" className="p-1">
        <u>Reviews</u>
      </Navbar.Text>
      <IsLoggedIn user={user} />
    </Navbar>
  );
};

export default Nav;
