import React from 'react';
import { render } from '@testing-library/react';
import TutorForm from './TutorForm';
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom"

function TutorSignUp(){

    
    return (
        <div>
            <li>
                <Link to="/">Home</Link>
              </li>
            Tutor Sign Up Component!
        <TutorForm />
        </div>
    );

}

export default TutorSignUp;
