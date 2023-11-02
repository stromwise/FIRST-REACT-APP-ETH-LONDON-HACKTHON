// import firebase from 'firebase/app';
// import 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCy6IZcbPDlvK23QyLcjnk652k7uGYetpM",
  authDomain: "second-inquiry-403413.firebaseapp.com",
  projectId: "second-inquiry-403413",
  storageBucket: "second-inquiry-403413.appspot.com",
  messagingSenderId: "202718305049",
  appId: "1:202718305049:web:42f5cf0e254a58cac4c388",
  measurementId: "G-CN0EG3632M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = app.auth();
export const auth = getAuth(app);
export default app;
