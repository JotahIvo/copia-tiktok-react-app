import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBI0sZldxS0VVTO0eSEWZHN7zNEaEqtqbg",
  authDomain: "tiktok-app-d7e57.firebaseapp.com",
  projectId: "tiktok-app-d7e57",
  storageBucket: "tiktok-app-d7e57.appspot.com",
  messagingSenderId: "794145484867",
  appId: "1:794145484867:web:b4bc8e781692fb1cf4e4f6",
  measurementId: "G-558CZYMYLX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;