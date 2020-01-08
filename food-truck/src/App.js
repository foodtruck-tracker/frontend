import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "./components/Operator/LandingPage";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import RegForm from "./components/RegForm";
import NavBar from "./components/Operator/NavBar";



import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        
          {/* <Route exact path="/" component={Login} /> 
          <Route path= "/register" component={RegForm} />

        <PrivateRoute path='/operator-dashboard' component={Dashboard} /> */}
      </div>
    </Router>
  );
}

export default App;
