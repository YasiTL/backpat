import React from 'react';
import TutorForm from './TutorForm';
import { Link } from "react-router-dom"

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
