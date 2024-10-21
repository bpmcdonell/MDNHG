import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  "projectId": "maryland-nhg",
  "appId": "1:548772139785:web:7da8ec05154c9d86fcf9d8",
  "storageBucket": "maryland-nhg.appspot.com",
  "apiKey": "AIzaSyDh9DEPGiBsadvZKMYGsLelE6bIOJW4cHY",
  "authDomain": "maryland-nhg.firebaseapp.com",
  "messagingSenderId": "548772139785",
  "measurementId": "G-3NK5Y58SZS"
}

export const firebaseApp = initializeApp(firebaseConfig);