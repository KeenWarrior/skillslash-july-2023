import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4j0gPy5d7Hc3FJ9kZN9WyrXdcMJsmTkA",
  authDomain: "notes-acf77.firebaseapp.com",
  projectId: "notes-acf77",
  storageBucket: "notes-acf77.appspot.com",
  messagingSenderId: "546396501411",
  appId: "1:546396501411:web:e6c67e516a0d6390ba9616",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
