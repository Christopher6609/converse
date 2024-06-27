import React from 'react';
import { useState } from 'react';


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

  setFormFields({ ...formFields,[name]:value });
}

  return (
    <div>
      <div>
        <form onSubmit={()=>{}}>
        <label htmlFor='username'>Username:</label>
          <input type="text" placeholder='Enter your Username' name="username" value={username} onChange={handleChange} required />
          <label htmlFor='email'>Email:</label>
          <input type='email' placeholder='Enter your Email' name='email' value={email} onChange={handleChange} required/>
          <label htmlFor='password'>Password:</label>
          <input type='password' placeholder='Enter your Password' name='password' value={password} onChange={handleChange} required/>
          <label htmlFor='confirmpassword'>Confirm Password:</label>
          <input type='password' placeholder='Confirm Password' name='confirmpassword' value={confirmpassword} onChange={handleChange}required/>
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp;
