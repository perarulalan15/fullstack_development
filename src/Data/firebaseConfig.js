import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDBgGE-EfJ07Uimig3buC-_fDR9N6k2YUU",
  authDomain: "first-app-2e2a6.firebaseapp.com",
  projectId: "first-app-2e2a6",
  storageBucket: "first-app-2e2a6.appspot.com",
  messagingSenderId: "309807743940",
  appId: "1:309807743940:web:fa85b24de576c7ea819a91",
  measurementId: "G-4CW277FNLE"
};


export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);