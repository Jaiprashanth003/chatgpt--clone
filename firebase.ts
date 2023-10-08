import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBuMYl3hdxyWFjsbMkE5mnwAOTmbx1Xfyw",
  authDomain: "chatgpt-messanger-clone-f0379.firebaseapp.com",
  projectId: "chatgpt-messanger-clone-f0379",
  storageBucket: "chatgpt-messanger-clone-f0379.appspot.com",
  messagingSenderId: "20232242088",
  appId: "1:20232242088:web:d17de389daf169b0a8d39d"
};

const app = getApps().length ? getApp():initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db};
