import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, orderBy, doc, setDoc, Timestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDoNfJo9FY8wluw2v_UeDMHaQwAeQBICL4",
  authDomain: "chat-78231.firebaseapp.com",
  projectId: "chat-78231",
  storageBucket: "chat-78231.appspot.com",
  messagingSenderId: "857646640495",
  appId: "1:857646640495:web:26b84696d74b6495328c9a"
};

// // Initialize Firebase
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// // Initialize Firestore
// const db = getFirestore(app);


let app;

if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp(); // if already initialized, use that one
}

export const db = getFirestore(app);

export const addMessage = async (message) => {
  try {
    const docRef = doc(collection(db, "messages"));
    await setDoc(docRef, { ...message, timestamp: Timestamp.now() });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getMessages = async () => {
  const q = query(collection(db, 'messages'), orderBy("timestamp"));
  return getDocs(q);
};