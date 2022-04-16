// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDh2Yq5BcgFHm5JC30wkfTzWMmh1GOkNgg",
    authDomain: "momenta-photography.firebaseapp.com",
    projectId: "momenta-photography",
    storageBucket: "momenta-photography.appspot.com",
    messagingSenderId: "467985685028",
    appId: "1:467985685028:web:c14549df2d91053621d6b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;