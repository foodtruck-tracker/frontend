import React , {Component}  from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";


import  store from './store'

import Diners from './components/Diner/Diners';
import DinerForm from './components/Diner/DinerForm';


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
    <Provider store={store}>
    <Router>
      <div className="App">
        <NavBar />
        <Dashboard />
        <PrivateRoute path='/operator-dashboard' component={Dashboard} /> 
        <PrivateRoute path='/addtruck' component={AddTruck} />
        <PrivateRoute path='/location' component={Location} />
        <PrivateRoute path='/menu' component={Menu} />
        <PrivateRoute path='/reviews' component={Reviews} />        
        <PrivateRoute path='/trucks' component={Trucks} />
        
          {/* <Route exact path="/" component={Login} /> 
          <Route path= "/register" component={RegForm} />
         


        <PrivateRoute path='/operator-dashboard' component={Dashboard} /> */}
        <Route path= "/diners" component={Diners} />
         <Route path= "/becomeadiner" component={DinerForm} />
     
      <hr />
      
      </Router>
    </div>
    </Provider>
  );
}
}

export default App;
