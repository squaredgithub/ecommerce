import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5UXL1zeou5PBw2eMcmmXOVLfa-FgMg1I",
    authDomain: "full-site-90394.firebaseapp.com",
    databaseURL: "https://full-site-90394-default-rtdb.firebaseio.com",
    projectId: "full-site-90394",
    storageBucket: "full-site-90394.appspot.com",
    messagingSenderId: "901351513817",
    appId: "1:901351513817:web:ef719613c4ee8329a3a8c8",
    measurementId: "G-C93TS2VSRK"
  };
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export { app, firestore, storage};
  