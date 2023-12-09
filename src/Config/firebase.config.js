// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIwXGwFSF36c7CpvVYpgRKajiG4URLJLs",
    authDomain: "foporbaz.firebaseapp.com",
    projectId: "foporbaz",
    storageBucket: "foporbaz.appspot.com",
    messagingSenderId: "664114379604",
    appId: "1:664114379604:web:b511302496a6298fac66c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth