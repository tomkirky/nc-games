import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Reviews from './components/Reviews';
import FourZeroFour from './components/FourZeroFour';
import { UserContext } from './contexts/User';
import { ValidUserContext } from './contexts/ValidUser';
import IndividualReview from './components/IndividualReview';

function App() {
  const [user, setUser] = useState(null);
  const [validUser, setValidUser] = useState(false);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <ValidUserContext.Provider value={{ validUser, setValidUser }}>
          <div className="App">
            <Nav />
            <Switch>
              <Route path="/" exact>
                <Home
                  setCategory={setCategory}
                  categories={categories}
                  setCategories={setCategories}
                />
              </Route>
              <Route path="/reviews" exact>
                <Reviews
                  category={category}
                  setCategory={setCategory}
                  categories={categories}
                  setCategories={setCategories}
                />
              </Route>
              <Route exact path="/reviews/:review_id">
                <IndividualReview />
              </Route>
              <Route path="*">
                <FourZeroFour />
              </Route>
            </Switch>
          </div>
        </ValidUserContext.Provider>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
