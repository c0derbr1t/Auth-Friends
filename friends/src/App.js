import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import PrivateRoute from './components/PrivateRoute';

import { Title, Linked, Nav } from './components/Styles';

import './App.css';

function App() {
  return (
   <Router>
     <div className="App">
        <Title> Friends List</Title>
        <Nav>
          <Linked to="/login">Login</Linked>
          <Linked to="/add">Add a Friend</Linked>
          <Linked to="/protected">Friends</Linked>
        </Nav>
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
