import IsLoggedIn from './Login';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { House } from 'react-bootstrap-icons';

const Nav = ({ user }) => {
  return (
    <Navbar bg="light" variant="light" expand="md">
      <Navbar.Brand as={Link} to="/" className="p-1">
        <House className="mb-1 mr-1" />
        TK Ratings
      </Navbar.Brand>
      <Navbar.Text as={Link} to="/reviews" className="p-1">
        <u>
          <b>Reviews</b>
        </u>
      </Navbar.Text>
      <IsLoggedIn user={user} />
    </Navbar>
  );
};

export default Nav;
