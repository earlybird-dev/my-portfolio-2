// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZIClIGN07fs64sxKK3BEndxK8NPiqA2c",
  authDomain: "early-bird-dev-2023.firebaseapp.com",
  projectId: "early-bird-dev-2023",
  storageBucket: "early-bird-dev-2023.appspot.com",
  messagingSenderId: "501663869918",
  appId: "1:501663869918:web:b7dc1f9e139a7b8d72cb4f",
  measurementId: "G-T8L0TMGL5B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
