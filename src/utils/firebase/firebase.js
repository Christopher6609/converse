// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUgZhguMwhRmVvU1_uC-FM03UbEDD7UQw",
  authDomain: "converse-e7d4d.firebaseapp.com",
  projectId: "converse-e7d4d",
  storageBucket: "converse-e7d4d.appspot.com",
  messagingSenderId: "275955877273",
  appId: "1:275955877273:web:16050978491104e2943f08"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);



export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'user', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
      const {displayName, email } = userAuth;
      const createdAt = new Date();
      try{
        await setDoc(userDocRef, {displayName,email,createdAt});
      } catch(error) {
          console.log("Error creating user", error.message);
      }
    }
    return userDocRef;
}

export const createAuthwithUserandPassword = async (email, password) => {
  if(!email || !password) return;
  
  return await createUserWithEmailAndPassword(auth, email, password);
}