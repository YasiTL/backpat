import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Home from './components/Home.js';
import ParentSignUp from './components/ParentSignUp.js';
import TutorSignUp from './components/TutorSignUp.js';
import Login from './components/Login.js';
import ParentDashboard from './components/ParentDashboard';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';
import { FormatAlignRight } from '@material-ui/icons';

// Global Theme Changes
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EF6C00'
    },
    secondary: {
      main: '#333333'
    },
  },
  typography: {
    fontFamily: 'Open sans',
    fontSize: 18,
  }
    
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </div>
  );
}

export default App;
