import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBMirXvtfJu1ju05C1V2PwBnNkyPtxL_bY",
    authDomain: "fir-authentication-cbe0a.firebaseapp.com",
    projectId: "fir-authentication-cbe0a",
    storageBucket: "fir-authentication-cbe0a.appspot.com",
    messagingSenderId: "168448307594",
    appId: "1:168448307594:web:34f17217a01deed5b09873",
    measurementId: "G-B65XZ2JEH7"
  };  

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);