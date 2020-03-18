import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from './components/FriendsList';
import AnotherProtectedComp from './components/AnotherProtectedComp';


function App() {
  return (
    <div className="App">
     <Router>
      <div className="App">
        <ul>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
              <NavLink to="/friendsList">List of Friends</NavLink>
              <NavLink to="/otherComp">Anoter Protected Page</NavLink>
             
          </li>
        </ul>
        <Switch>
            <PrivateRoute exact path="/friendsList" component={FriendsList} />
            <PrivateRoute exact path="/otherComp" component={AnotherProtectedComp} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
      </Router>
      {/* <FriendsList /> */}
    </div>
  );
}

export default App;
// Please don't mind me
