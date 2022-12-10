import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDvVfPpVo19eLAZZig-dGUU4U4oWTg5p7M",
  authDomain: "chat-ab188.firebaseapp.com",
  projectId: "chat-ab188",
  storageBucket: "chat-ab188.appspot.com",
  messagingSenderId: "743691718979",
  appId: "1:743691718979:web:ca67d7412d705d3ff4dff6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()