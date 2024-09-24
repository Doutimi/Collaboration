// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8IDlfKZ02ZssoKvGe1dDr2p19TKZN9_c",
  authDomain: "notify-b3e63.firebaseapp.com",
  projectId: "notify-b3e63",
  storageBucket: "notify-b3e63.appspot.com",
  messagingSenderId: "531602375598",
  appId: "1:531602375598:web:a1de0a06111b4027c7be3f",
  measurementId: "G-HHQ9J4D0CQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

export const generateToken = async () => {
    const permission = await Notification.requestPermission();
    console.log(`Notification is`, permission);
    if (permission === "granted"){
        const token = await getToken(messaging, {
            vapidKey: 
            "BMnZMamiNuLKfPdkh9aqZkTiT_n4dTTvRbB0QIZ04rEfOdshLQLxFDGbDk2hpJUNCt7GaqB3nIO2ojifMRd8AEk",
        });
        console.log(token);
    }
};