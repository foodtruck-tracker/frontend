import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "./components/Operator/LandingPage";
import AddTruck from "./components/Operator/AddTruck";
import Location from "./components/Operator/Location";
import Login from "./components/Login";
import Menu from "./components/Operator/Menu";
import PrivateRoute from "./components/PrivateRoute";
import RegForm from "./components/RegForm";
import Reviews from "./components/Operator/Reviews";
import Trucks from "./components/Operator/Trucks";




import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Dashboard /> 
        {/* <Trucks /> */}
         <Route exact path="/" component={Login} /> 
         <Route path= "/register" component={RegForm} /> 

        {/* <PrivateRoute path='/operator-dashboard' component={Dashboard} /> 

        <PrivateRoute path='/addtruck' component={AddTruck} />
        <PrivateRoute path='/location' component={Location} />
        <PrivateRoute path='/menu' component={Menu} />
        <PrivateRoute path='/reviews' component={Reviews} />        
        <PrivateRoute path='/trucks' component={Trucks} /> */}
        
      </div>
    </Router>
  );
}

export default App;
