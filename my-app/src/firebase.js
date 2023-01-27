// import { initializeApp } from "firebase/app";
//   import { getAuth } from "firebase/auth";
//  import { getStorage } from "firebase/storage";
//  import { getFirestore } from "firebase/firestore";


// const firebaseConfig = {
//   apiKey: "AIzaSyDvVfPpVo19eLAZZig-dGUU4U4oWTg5p7M",
//   authDomain: "chat-ab188.firebaseapp.com",
//   projectId: "chat-ab188",
//   storageBucket: "chat-ab188.appspot.com",
//   messagingSenderId: "743691718979",
//   appId: "1:743691718979:web:ca67d7412d705d3ff4dff6"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
// export const storage = getStorage();
// export const db = getFirestore()

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBVwF3lhF8_ASzpj-lFO41-PyhYi-0_WM",
  authDomain: "demo1-a47a0.firebaseapp.com",
  projectId: "demo1-a47a0",
  storageBucket: "demo1-a47a0.appspot.com",
  messagingSenderId: "825638739069",
  appId: "1:825638739069:web:857490fc6a08cd38cba514",
  measurementId: "G-VVMN19PJVH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
