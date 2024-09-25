import { initializeApp, type FirebaseApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";
import  { useEffect } from "react";


// let firebaseApp:FirebaseApp


export const register = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/firebase-messaging-sw.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.error('Error registering service worker:', error);
        });
    }
};


export default function FirebaseServiceWorker(){
    useEffect(()=>{
        register();
    },[])
    return <></>
}

