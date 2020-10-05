import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom"

function Home() {
    return (
        <div>
            <p>Welcome to the home component!</p>
            <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/parentsignup">Parent Sign Up</Link>
              </li>
              <li>
                <Link to="/tutorsignup">Tutor Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Login here</Link>
              </li>

            </ul>
          </nav>
        </div>
    );
}

export default Home;
