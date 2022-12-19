import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYQbwt9uYZ-_RtQVkM6ZR379KJ3IQ9bYo",
  authDomain: "auth-dev-64108.firebaseapp.com",
  projectId: "auth-dev-64108",
  storageBucket: "auth-dev-64108.appspot.com",
  messagingSenderId: "900188164091",
  appId: "1:900188164091:web:e2b463fe637986ecb3855e"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export default firebaseApp;