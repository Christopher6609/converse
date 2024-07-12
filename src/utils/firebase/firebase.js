// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
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
export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'user', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    

    if(!userSnapshot.exists()){
      const {displayName, email } = userAuth;
      const createdAt = new Date();
      try{
        await setDoc(userDocRef, {displayName,email,createdAt, ...additionalInformation});
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

export const signInAuthwithEmailandPassword = async (email,password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signUserOut = async () => {
   await signOut(auth);
}

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth,callback)
}