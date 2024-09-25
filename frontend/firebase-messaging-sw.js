// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging/sw";

// const firebaseApp = initializeApp({
//     apiKey: "AIzaSyC8IDlfKZ02ZssoKvGe1dDr2p19TKZN9_c",
//     authDomain: "notify-b3e63.firebaseapp.com",
//     projectId: "notify-b3e63",
//     storageBucket: "notify-b3e63.appspot.com",
//     messagingSenderId: "531602375598",
//     appId: "1:531602375598:web:a1de0a06111b4027c7be3f",
//     measurementId: "G-HHQ9J4D0CQ"
// });

// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
// export const messaging = getMessaging(firebaseApp);

self.registration.showNotification(notificationTitle, notificationOptions);


