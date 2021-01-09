import app from 'firebase/app';
import 'firebase/firestore';
import '@firebase/auth';


// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID
// };
const config = {
  apiKey: "AIzaSyCzxBjP_AJsFP3D_QRR6lClDPhJGQvcQ08",
  authDomain: "backpat-93a28.firebaseapp.com",
  databaseURL: "https://backpat-93a28.firebaseio.com",
  projectId: "backpat-93a28",
  storageBucket: "backpat-93a28.appspot.com",
  messagingSenderId: "1083110648310",
  appId: "1:1083110648310:web:d387ae855b693f91277fd7",
  measurementId: "G-V7N7PHR1GC"
};

class Firebase {
  constructor() {
    const fire = app.initializeApp(config);
    // var base = app.firestore()
  }
}
export { fire };
export default Firebase;