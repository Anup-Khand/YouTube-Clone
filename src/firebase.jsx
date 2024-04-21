import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: "AIzaSyA1JQVhdqb1pB_fVyxiemoaPTHytZDIZu8",
//   authDomain: "yt-clone98.firebaseapp.com",
//   projectId: "yt-clone98",
//   storageBucket: "yt-clone98.appspot.com",
//   messagingSenderId: "584952456554",
//   appId: "1:584952456554:web:c6930a4148c2debd7d7113",
// };
const firebaseConfig = {
  apiKey: "",
  authDomain: "ytcc-56c81.firebaseapp.com",
  projectId: "ytcc-56c81",
  storageBucket: "ytcc-56c81.appspot.com",
  messagingSenderId: "929002562848",
  appId: "1:929002562848:web:7100c0803e3fb52e492345",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDNrnfLoYCWJ5_cgvuiGIQTJkhToSAp8GM",
//   authDomain: "yt-cc-41c11.firebaseapp.com",
//   projectId: "yt-cc-41c11",
//   storageBucket: "yt-cc-41c11.appspot.com",
//   messagingSenderId: "868618088748",
//   appId: "1:868618088748:web:c52b895684b43253303c89",
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyDi8_CQznIauhfUHuEzRu5-lBYnhWKPNOs",
//   authDomain: "yt-2929.firebaseapp.com",
//   projectId: "yt-2929",
//   storageBucket: "yt-2929.appspot.com",
//   messagingSenderId: "765700959980",
//   appId: "1:765700959980:web:e65389b6bce3371fd1ffc9",
// };
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
