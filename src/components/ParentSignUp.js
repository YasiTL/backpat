import React from 'react';
import ParentForm from './ParentForm';
import { Link } from "react-router-dom"

function ParentSignUp() {
    return (
        <div>
            <li>
                <Link to="/">Home</Link>
              </li>
            Parent Sign up component!
            <ParentForm />
            
        </div>
    );
}

export default ParentSignUp;
