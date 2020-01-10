import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/Diner/PrivateRoute';
import FavoritePage from './components/Diner/TrucksPage';
import RegForm from './components/Diner/RegForm';
import Login from './components/Diner/Login';
import "./styles.scss";

function App() {
  return (
     <Router>
      <div className="App">
      
        <Switch>
          <PrivateRoute path="/diner-dashboard" component={FavoritePage} />
          <Route path="/login" component={Login} />
          <Route path= "/register" component={RegForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;