import SignIn from "../sign-in/SignIn";
import SignUp from "../sign-up/SignUp";

const Auth = () => {
    return(
        <div className="flex justify-between w-[70rem] mx-auto my-[30px]">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default Auth;