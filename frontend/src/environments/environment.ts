// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp7HA3CePaiQUk-kNQudrQP_dMPj_KaHo",
  authDomain: "mhrs-application.firebaseapp.com",
  projectId: "mhrs-application",
  storageBucket: "mhrs-application.appspot.com",
  messagingSenderId: "801686123510",
  appId: "1:801686123510:web:203d4b859cfbaf3d8a0dd7",
  measurementId: "G-DTCQDZTR58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);