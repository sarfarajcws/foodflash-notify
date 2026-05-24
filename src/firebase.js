import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCJEaehnfraCZ2wf8G-dy38NzUG_YIHeYs",
  authDomain: "foodflash-notify.firebaseapp.com",
  projectId: "foodflash-notify",
  storageBucket: "foodflash-notify.firebasestorage.app",
  messagingSenderId: "992515979630",
  appId: "1:992515979630:web:9a88c34a88eedb4191697f"
};

const app = initializeApp(firebaseConfig);

export default app;
