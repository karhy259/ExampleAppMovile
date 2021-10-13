import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './assets/css/App.css';

//components

import Login from './pages/Login/Login'
import Registro from './pages/Registro/Registro'
import Home from './pages/Home/Home'




function App() {

  return (
    <div className="App">     
      <Router>
        
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/registro" component={Registro} />
          <Route exact path="/" component={Login} />
        </Switch>
    
        </Router>
    </div>   
  );
}

export default App;
