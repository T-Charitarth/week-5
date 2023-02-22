  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCFKtAUWY3fzAivKExeE3rDWiU4QuVIeHE",
    authDomain: "sampleproject-83975.firebaseapp.com",
    databaseURL: "https://sampleproject-83975-default-rtdb.firebaseio.com",
    projectId: "sampleproject-83975",
    storageBucket: "sampleproject-83975.appspot.com",
    messagingSenderId: "774449090985",
    appId: "1:774449090985:web:59264d735fe528ebbe34b8"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
