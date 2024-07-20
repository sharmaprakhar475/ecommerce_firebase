import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuGbF_iIsUB3tSVxUZmQ5sJdpOg7VhivA",
  authDomain: "myfirstapp-67eb5.firebaseapp.com",
  projectId: "myfirstapp-67eb5",
  storageBucket: "myfirstapp-67eb5.appspot.com",
  messagingSenderId: "895874858433",
  appId: "1:895874858433:web:76b3ad6a03d0b2be348340",
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
