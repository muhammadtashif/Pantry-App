// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBPb-t7MQV5dnBn5C_9ajaC0zRHl_dTkmY",
  authDomain: "hsnap-168cc.firebaseapp.com",
  projectId: "hsnap-168cc",
  storageBucket: "hsnap-168cc.appspot.com",
  messagingSenderId: "910648360195",
  appId: "1:910648360195:web:0765a83973856faf8fbd36",
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore =getFirestore(app)
export {app,firestore}