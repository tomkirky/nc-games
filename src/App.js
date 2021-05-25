import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Nav from './components/nav';
import Home from './components/home';
import Reviews from './components/reviews';
import { UserContext } from './contexts/User';
import IndividualReview from './components/individualreview';

function App() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [user, setUser] = useState(null);

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact>
              <Home
                categories={categories}
                setCategories={setCategories}
                category={category}
                setCategory={setCategory}
              />
            </Route>
          </Switch>
          <Switch>
            <Route path="/reviews" exact>
              <Reviews
                category={category}
                setCategory={setCategory}
                categories={categories}
              />
            </Route>
            <Route exact path="/reviews/:review_id">
              <IndividualReview />
            </Route>
          </Switch>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
