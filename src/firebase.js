import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyD3wPXxggOsza9yIrArYev8LmxFl9jhT80",
  authDomain: "chat-b7350.firebaseapp.com",
  projectId: "chat-b7350",
  storageBucket: "chat-b7350.appspot.com",
  messagingSenderId: "201847604084",
  appId: "1:201847604084:web:6d704e328e8f46620e6221",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
