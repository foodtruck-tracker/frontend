import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/Diner/PrivateRoute';
import FavoritePage from './components/Diner/TrucksPage';
import FormikRegistration from './components/Diner/RegForm';
import Login from './components/Diner/Login';
import "./styles.scss";

function App() {
  return (
     <Router>
      <div className="App">
      
        <Switch>
          <PrivateRoute path="/diner-dashboard" component={FavoritePage} />
          <Route path="/" component={Login} />
          <Route path= "/register" component={FormikRegistration} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;