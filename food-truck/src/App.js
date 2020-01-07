import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import RegForm from "./components/RegForm";
import Login from "./components/Login";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

        <Route exact path="/" component={Login} />
        <Route path= "/register" component={RegForm} />
        
      </div>
    </Router>
  );
}

export default App;
