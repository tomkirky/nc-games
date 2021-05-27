import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Nav from './components/nav';
import Home from './components/home';
import Reviews from './components/reviews';
import FourZeroFour from './components/fourzerofour';
import { UserContext } from './contexts/User';
import IndividualReview from './components/individualreview';

function App() {
  const [user, setUser] = useState(null);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
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
      </UserContext.Provider>
    </Router>
  );
}

export default App;
