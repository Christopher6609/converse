import React from 'react';
import { useState } from 'react';
import { createAuthwithUserandPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase';
import FormInput from '../../components/atoms/FormInput/FormInput';
import Button from '../../components/atoms/Button/Button';


const defaultFormFields = {
  username:'',
  email:'',
  password:'',
  confirmpassword:''
}

const SignUp = () => {
const [formFields, setFormFields] = useState(defaultFormFields);
const {username,email,password,confirmpassword} = formFields;

const handleChange = (event) => {
  const {name, value} = event.target;
  setFormFields({ ...formFields, [name]:value });
}

const clearForm = () => {
  setFormFields(defaultFormFields);
}

const handleSubmit = async (event) =>  {
  event.preventDefault();
  if(password != confirmpassword){
    alert("Password do not match");
    return;
  }
  try{
      const {user} = await createAuthwithUserandPassword(email, password);
     await createUserDocumentFromAuth(user, {username});
      clearForm();

  }catch(error){
    if(error.code === "auth/email-already-in-use"){
      alert("Email already in use");
    }else{
      console.log(error);
    }
    
  }



}

  return (
    <div>
      <h2>I do not have an account</h2>
      <h1 className='text-[2rem]'>Sign Up with your Email and Password</h1>
      <div>
        <form onSubmit={handleSubmit}>
        <FormInput 
          label="Username:"
          type="text"
          name="username" 
          value={username} 
          onChange={handleChange} 
          required
        />
        <FormInput 
          label="Email:"
          type='email'    
          name='email' 
          value={email} 
          onChange={handleChange} 
          required
        />
        <FormInput 
          label="Password:"
          type='password' 
          name='password' 
          value={password} 
          onChange={handleChange} required
        />
        <FormInput 
          label="Confirm Password:"
          type='password'  
          name='confirmpassword' 
          value={confirmpassword} 
          onChange={handleChange} 
          required
        />
        
          <Button type='submit'>Sign Up</Button>
        </form>
      </div>
    </div>
  )
}

export default SignUp;
