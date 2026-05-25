importScripts(
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js'
);

importScripts(
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js'
);

firebase.initializeApp({
  apiKey: "AIzaSyCJEaehnfraCZ2wf8G-dy38NzUG_YIHeYs",
  authDomain: "foodflash-notify.firebaseapp.com",
  projectId: "foodflash-notify",
  storageBucket: "foodflash-notify.firebasestorage.app",
  messagingSenderId: "992515979630",
  appId: "1:992515979630:web:9a88c34a88eedb4191697f"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {

  console.log(
    '[firebase-messaging-sw.js] Received:',
    payload
  );

  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: '/icon-192.png'
    }
  );

});