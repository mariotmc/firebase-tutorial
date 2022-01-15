// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKVdmN2hfgrk8LV7yKhkAPCdZIEvKq64E",
  authDomain: "friendlychat-8717d.firebaseapp.com",
  projectId: "friendlychat-8717d",
  storageBucket: "friendlychat-8717d.appspot.com",
  messagingSenderId: "669196290879",
  appId: "1:669196290879:web:b94890545800c7aa35a18a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export function getFirebaseConfig() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return firebaseConfig;
  }
}
