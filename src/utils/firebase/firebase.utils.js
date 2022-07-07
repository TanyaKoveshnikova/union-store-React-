import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6u30Redvy6kVRush-n2w79StfzZodGhE",
  authDomain: "union-store-db.firebaseapp.com",
  projectId: "union-store-db",
  storageBucket: "union-store-db.appspot.com",
  messagingSenderId: "601709552013",
  appId: "1:601709552013:web:2522e2d522c31a142addc4",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userDocRef,{displayName,email,createdAt});
    }catch(error){
      console.log('error creating the user', error.message)
    }
  }
  
};
