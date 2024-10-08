const { initializeApp } = require("firebase/app");
import { getAuth, createUserWithEmailAndPassword } from "./node_modules/firebase/auth";
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js';

const firebaseConfig = {
  apiKey: "AIzaSyAwswtPvBIt5V6fAy4FcHzOiS2ZaK2dxCg",
  authDomain: "swcontest-e2cf1.firebaseapp.com",
  projectId: "swcontest-e2cf1",
  storageBucket: "swcontest-e2cf1.appspot.com",
  messagingSenderId: "709771669514",
  appId: "1:709771669514:web:e758e2882414c626a6eff3",
  measurementId: "G-7H81QEC5S6",
  databaseURL: "https://swcontest-e2cf1-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

module.exports = app;

export { auth, createUserWithEmailAndPassword,database };