import React from 'react'
import firebase from 'firebase'
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import 'firebaseui/dist/firebaseui.css'
import './Login.css'


require('firebase/auth')
var firebaseui = require('firebaseui');


var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: `${process.env.PUBLIC_URL}/admindashboard`,
  tosUrl: '', //terms of service URL
  privacyPolicyUrl: '' //privacy policy URL
});

function Login() {
  return (
      <div>
        <ScopedCssBaseline>
        <div id="firebaseui-auth-container"></div>
        </ScopedCssBaseline>
          Admin Login
      </div>
  );
}

export default AdminLogin;