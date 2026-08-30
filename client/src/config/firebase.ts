// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsYZxSrk5yrQdp1yfTe1AwodW4J2cK6lQ",
  authDomain: "gramo-ecom.firebaseapp.com",
  projectId: "gramo-ecom",
  storageBucket: "gramo-ecom.firebasestorage.app",
  messagingSenderId: "463771513787",
  appId: "1:463771513787:web:3792779cf831a14ede4a9e",
  measurementId: "G-1WLZ0DHTPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { initializeAuth, browserLocalPersistence, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const auth = initializeAuth(app, {
  persistence:
    Platform.OS === 'web'
      ? browserLocalPersistence
      : getReactNativePersistence(AsyncStorage),
});

// Analytics (only supported in web/some platforms, may throw on React Native without specific native modules)

let analytics: any = null;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
}).catch(() => {});

export { app, auth, analytics };