// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhBuD9_tzc3XFRIiIfnsJd3xDWpbMRaeA",
  authDomain: "fir-152a5.firebaseapp.com",
  projectId: "fir-152a5",
  storageBucket: "fir-152a5.appspot.com",
  messagingSenderId: "215039426420",
  appId: "1:215039426420:web:e3476427b420bbc921b621",
  measurementId: "G-JW2YYRP29R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app