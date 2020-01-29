import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
   <Router>
     <div className="App">
       <ul>
         <li>
           <Link to="/login">Login</Link>
         </li>
         <li>
            <Link to="/protected">Friends</Link>
         </li>
         <li>
           <Link to="/add">Add a Friend</Link>
         </li>
       </ul>
       <Switch>
         <PrivateRoute path="/protected" component={FriendsList} />
         <PrivateRoute path="/add" component={AddFriend} />
         <Route path="/login" component={Login} />
         <Route component={Login} />
       </Switch>
     </div>
   </Router>
  );
}

export default App;
