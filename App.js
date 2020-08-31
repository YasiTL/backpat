import React from 'react';
import logo from './logo.svg';
import './App.css';
import tutorLogin from './tutorLogin';
//import router from 'react-router'
//import { Link } from 'react-router-dom'

//Are we using Route or Link to connect files?

/*          
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'./tutorLogin'} className="nav-link">Tutor Logins</Link></li>
          </ul>
        </nav>

          */

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. This is the backpat site home page!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
  );
}


export default App;
