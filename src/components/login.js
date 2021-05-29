import { Form, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { UserContext } from '../contexts/User';
import { getUser } from '../utils/api';
import { useContext } from 'react';
import { ValidUserContext } from '../contexts/ValidUser';

const IsLoggedIn = () => {
  const { user, setUser } = useContext(UserContext);
  const { validUser, setValidUser } = useContext(ValidUserContext);

  const [username, setUsername] = useState('');

  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(username);
    getUser(username)
      .then(() => {
        setValidUser(true);
      })
      .catch(() => {
        setHasError(true);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setUser('');
    setHasError(false);
    setValidUser(false);
  };

  if (hasError)
    return (
      <Form inline className="ml-auto">
        <Form.Row>
          <Col xs="auto">
            <Navbar.Text className="text-center">Username Invalid</Navbar.Text>
          </Col>
          <Col xs="auto">
            <Button type="submit" onClick={reset} variant="dark">
              Retry
            </Button>
          </Col>
        </Form.Row>
      </Form>
    );

  if (validUser) {
    return (
      <Form inline className="ml-auto">
        <Form.Row>
          <Col xs="auto">
            <Navbar.Text className="text-center font-weight-bold">
              {user}
            </Navbar.Text>
          </Col>
          <Col xs="auto">
            <Button type="submit" onClick={reset} variant="dark">
              Log Out
            </Button>
          </Col>
        </Form.Row>
      </Form>
    );
  }

  return (
    <Form inline className="ml-auto">
      <Form.Row>
        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder="Username"
            className="text-center"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </Col>
        <Form.Label column sm={0}></Form.Label>
        <Col xs="auto">
          <Button type="submit" onClick={handleSubmit} variant="dark">
            Sign in
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default IsLoggedIn;
