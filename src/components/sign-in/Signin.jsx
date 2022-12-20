import React from "react";
import { useState} from "react";
import {
  signInWithGooglePopup,
  signinAuthForEmailAndPassword
} from "../../utils/firebase/Firebase";
import FormInput from "../form-input/FormInput";
import Button, { BUTTON_TYPE_CLASS} from '../button/Button.jsx';
import './signin.scss';
import { useNavigate } from 'react-router-dom'

const defaultFormFields = {
  email: "",
  password: "",
};
const Signin = () => {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;


  const navigateToShop = () => {
    // 👇️ navigate to /contacts
    navigate('/shop/*');
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const signInWithGoogle = async () => { 
      await signInWithGooglePopup();
    }

    const handleChange = (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      setFormFields({ ...formFields, [name]: value })
    };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signinAuthForEmailAndPassword(email, password);
    
      resetFormFields()

    } catch (error) {
      alert(error.code)
      console.log("An error was encountered", error)
    }
  }
    return (
      <div className="sign-in-container">
        <h1> Already have an account?</h1>
        <span>Sign in with your Email and Password</span>
        <form action="" onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            onChange={handleChange}
            name="email"
            value={email}
            required
          />

          <FormInput
            label="Password"
            type="password"
            onChange={handleChange}
            name="password"
            value={password}
            required
          />
          <div className="buttons-container">
            <Button type="submit" onClick={navigateToShop}>
              Sign in
            </Button>
            <Button type="button" buttonType={BUTTON_TYPE_CLASS.google} onClick={signInWithGoogle}>
              Google sign in
            </Button>
          </div>
        </form>
      </div>
    );
};

export default Signin;
