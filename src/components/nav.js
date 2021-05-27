import IsLoggedIn from './login';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Nav = ({ user }) => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        NC Game Reviews
      </Navbar.Brand>
      <IsLoggedIn user={user} />
    </Navbar>
  );
};

export default Nav;
