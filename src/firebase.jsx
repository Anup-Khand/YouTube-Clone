import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "ytcc-56c81.firebaseapp.com",
  projectId: "ytcc-56c81",
  storageBucket: "ytcc-56c81.appspot.com",
  messagingSenderId: "929002562848",
  appId: "1:929002562848:web:7100c0803e3fb52e492345",
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
