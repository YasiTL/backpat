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
import TutorSignUp from './components/TutorSignUp.js';
import Login from './components/Login.js';
import ParentDashboard from './components/ParentDashboard';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/parentsignup">
              <ParentSignUp/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route> 
            <Route path ="/tutorsignup">
              <TutorSignUp/>
            </Route>
            <Route path ="/parentdashboard">
              <ParentDashboard/>
            </Route>
            <Route path="/admindashboard">
              <AdminDashboard/>
            </Route>
            <Route path="/adminlogin">
              <AdminLogin/>
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
