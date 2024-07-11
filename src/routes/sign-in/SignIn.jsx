import { useState } from "react";
import FormInput from "../../components/atoms/FormInput/FormInput";
import { createUserDocumentFromAuth, signInWithGooglePopup,signInAuthwithEmailandPassword } from "../../utils/firebase/firebase";
import Button from "../../components/atoms/Button/Button";


const SignIn = () => {
    const signInGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
       console.log(user);
    }

    const initialFormFields = {
        email:"",
        password:""
    }

    const [formFields, setFormFields] = useState(initialFormFields);
    const {email,password} = formFields;
    const handleChange = (event) =>{
        const{ name,value } = event.target;

        setFormFields({ ...formFields,[name]:value })
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const response = await signInAuthwithEmailandPassword(email,password );
            console.log(response);
        }catch(error){
            switch(error.code){
                case 'auth/invalid-credential' :
                    alert('Invalid Credentials');
                    break;
                case 'auth/user-not-found':
                    alert('User not found');
                    break;
                default:
                    console.log(error);
            }
        }
    }

    return(
        <div>
            <div>
                <h2>I already have an account</h2>
                <h1 className='text-[2rem]'>Sign in with your Email and Password</h1>
             </div>
             <div>
                <form onSubmit={handleSubmit}>
                    <FormInput 
                        label="Email:"
                        type="email"
                        name="email" 
                        value={email} 
                        onChange={handleChange} 
                        required
                    />
                    <FormInput 
                        label="Password"
                        type="password"
                        name="password" 
                        value={password} 
                        onChange={handleChange} 
                        required
                    />
                    <div className="flex justify-between">
                    <Button type="submit">Sign in</Button>
                    <Button type="button" buttonType="google" onClick={signInGoogleUser}>Sign in with Google</Button>
                    </div>
                    
                </form>
             </div>

        </div>
    )
}

export default SignIn;