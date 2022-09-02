import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBMirXvtfJu1ju05C1V2PwBnNkyPtxL_bY",
    authDomain: "fir-authentication-cbe0a.firebaseapp.com",
    projectId: "fir-authentication-cbe0a",
    storageBucket: "fir-authentication-cbe0a.appspot.com",
    messagingSenderId: "168448307594",
    appId: "1:168448307594:web:6c57203d1d49b45bb09873",
    measurementId: "G-74QJWJKQ4R"
  }; 

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);