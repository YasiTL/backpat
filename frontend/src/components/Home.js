import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom"
import { Button } from '@material-ui/core';

function Home() {
    return (
        <div>
            <p>Welcome to the home component!</p>
            <nav>
            <ul>
              <li>
                <Button variant="outlined" color="primary" component={Link} to="/">Home</Button>
                {/* <Link to="/"><Button varient="outlined" color="secondary">Home</Button></Link> */}
              </li>
              <li>
                <Button variant="outlined" color="primary" component={Link} to="/parentsignup">Parent Sign Up</Button>
                {/* <Link to="/parentsignup">Parent Sign Up</Link> */}
              </li>
              <li>
                <Button variant="outlined" color="primary" component={Link} to="/tutorsignup">Tutor Sign Up</Button>
                {/* <Link to="/tutorsignup">Tutor Sign Up</Link> */}
              </li>
              <li>
                <Button variant="outlined" color="primary" component={Link} to="/login">Login</Button>
                {/* <Link to="/login">Login here</Link> */}
              </li>

            </ul>
          </nav>
        </div>
    );
}

export default Home;
