import React , {Component}  from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

import  store from './store'

import Diners from './components/Diner/Diners';
import DinerForm from './components/Diner/DinerForm';

//import Dashboard from "./components/Operator/LandingPage";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import RegForm from "./components/RegForm";
import NavBar from "./components/Operator/NavBar";



import './App.css';


class App extends Component {

  render(){

     return (
      <Provider store={store}>
     <div className="App">
     <Router>
      <NavBar />
        
          {/* <Route exact path="/" component={Login} /> 
          <Route path= "/register" component={RegForm} />
         

        <PrivateRoute path='/operator-dashboard' component={Dashboard} /> */}
         <Route path= "/becomeadiner" component={DinerForm} />
     
      <hr />
      
      </Router>
    </div>
    </Provider>
  );
}
}

export default App;
