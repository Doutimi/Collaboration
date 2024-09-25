importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyC8IDlfKZ02ZssoKvGe1dDr2p19TKZN9_c",
    authDomain: "notify-b3e63.firebaseapp.com",
    projectId: "notify-b3e63",
    storageBucket: "notify-b3e63.appspot.com",
    messagingSenderId: "531602375598",
    appId: "1:531602375598:web:a1de0a06111b4027c7be3f",
    measurementId: "G-HHQ9J4D0CQ"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
// Customize background notification handling here
messaging.onBackgroundMessage((payload) => {
  console.log('Background Message:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  // self.registration.showNotification(notificationTitle, notificationOptions);
  fetch("http://localhost:3000/worker").then(()=>console.log("message sent to backend"))
});

messaging.onMessage((payload) => {
  console.log('Background Message:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  // self.registration.showNotification(notificationTitle, notificationOptions);
  fetch("http://localhost:3000/worker").then(()=>console.log("message sent to backend"))
})

// eqm3t6aYMQ5ldAqlBIQRym:APA91bENJawCTojdWx84Q11g3N_6mISlNWLPQwr8j4x7mxNS2ST5vLIvP37WEfgDzahTFUFdV8aiBwdGMLW01ciUKKUj1MHSTBxHAWuXr2cQDiSDTa2IRk4ZWbAarlRz48XFuwsVN9rs