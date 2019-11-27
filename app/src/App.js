import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import Home from './containers/Home'

function App() {
  return (
    <div className="App">
    <Router>
      <div id="nav-container">
        <nav>
          <ul>
            <li>
              <Link exact to="/">Home</Link>
            </li>
          </ul>
        </nav>
        </div>

        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>

  );
}

export default App;
