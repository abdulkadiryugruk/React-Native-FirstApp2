// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtezCsB_AT-cp8Tpqk-Pw_ustUfcRizwk",
  authDomain: "firstapp2-a20bd.firebaseapp.com",
  projectId: "firstapp2-a20bd",
  storageBucket: "firstapp2-a20bd.appspot.com",
  messagingSenderId: "753222853409",
  appId: "1:753222853409:web:d24060dd3cda0edc171460"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
export const db = getFirestore(app);

export default app;