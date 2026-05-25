import { initializeApp } from "firebase/app";

import { getAnalytics }
from "firebase/analytics";

const firebaseConfig = {

  apiKey: "AIzaSyCJEaehnfraCZ2wf8G-dy38NzUG_YIHeYs",

  authDomain:
  "foodflash-notify.firebaseapp.com",

  projectId: "foodflash-notify",

  storageBucket:
  "foodflash-notify.firebasestorage.app",

  messagingSenderId:
  "992515979630",

  appId: "1:992515979630:web:9a88c34a88eedb4191697f",

  measurementId: "G-6BB8ZY22VX"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export default app;