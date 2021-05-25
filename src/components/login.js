import { Form, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { useContext, useState } from 'react';
import { UserContext } from '../contexts/User';

const IsLoggedIn = () => {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username });
  };

  if (user) {
    return <Navbar.Text>I am logged in</Navbar.Text>;
  }
  return (
    <Form inline>
      <Form.Row>
        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </Col>
        <Form.Label column sm={0}></Form.Label>
        <Col xs="auto">
          <Button type="submit" onClick={handleSubmit}>
            Sign in
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default IsLoggedIn;
