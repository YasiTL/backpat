import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import NavBar from './components/NavBar';
import Home from "./components/Home.js";
import ParentSignUp from "./components/ParentSignUp.js";
import TutorSignUp from "./components/TutorSignUp.js";
import Login from "./components/Login.js";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import Sidenav from "./components/Dashboard/Sidenav";
import FaqPage from "./components/FaqPage";

// Global Theme Changes
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#EF6C00",
    },
    secondary: {
      main: "#333333",
    },
  },
  typography: {
    fontFamily: "Lato, sans-serif",
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          {window.location.pathname === '/' ||
            window.location.pathname === '/parentsignup' ||
            window.location.pathname === '/tutorsignup' ||
            window.location.pathname === 'faq'
            ? <NavBar /> : <></>}
          <Switch>
            <Route path="/parentsignup">
              <ParentSignUp />
            </Route>
            <Route path="/tutorsignup">
              <TutorSignUp />
            </Route>
            <Route path="/dashboard" exact>
              <Sidenav />
            </Route>
            <Route path="/admindashboard">
              <AdminDashboard />
            </Route>

            <Route path="/login">
              <Login />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/faq" exact>
              <FaqPage />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
