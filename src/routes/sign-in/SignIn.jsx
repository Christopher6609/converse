import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase";


const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
       createUserDocumentFromAuth(user);
      
        
        
    }

    return(
        <>
            <div>Sign in here</div>
            <button onClick={logGoogleUser} className="bg-[gray] p-4 rounded-xl">Sign in with Google</button>
        </>
    )
}

export default SignIn;