import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import Home from './components/Home.js';
import ParentSignUp from './components/ParentSignUp.js';

function App() {
  return ( 
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/parentsignup">
              <ParentSignUp/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
