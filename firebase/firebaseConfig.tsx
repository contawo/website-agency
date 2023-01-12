import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAX7bjAKuLczmEcZEM6Mw5252JXNlX7v3I",
  authDomain: "magnasite-8e3fa.firebaseapp.com",
  projectId: "magnasite-8e3fa",
  storageBucket: "magnasite-8e3fa.appspot.com",
  messagingSenderId: "709371638470",
  appId: "1:709371638470:web:cea126ac3de338c937ddc7",
  measurementId: "G-FRHCHS5N1L"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);