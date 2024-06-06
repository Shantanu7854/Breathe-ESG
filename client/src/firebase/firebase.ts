// src/firebase/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCBOCaQR3NGrMZT8aQSIiPmNY2SEr0iAXM",
    authDomain: "breathe-esg-bca47.firebaseapp.com",
    projectId: "breathe-esg-bca47",
    storageBucket: "breathe-esg-bca47.appspot.com",
    messagingSenderId: "217049294598",
    appId: "1:217049294598:web:7161d210c07b0c7df22087",
    measurementId: "G-FJQ40QBB94"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
