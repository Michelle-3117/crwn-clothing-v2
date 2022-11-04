import React from "react";
import { useState } from "react";
import {
  createAuthForEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/Firebase";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button"
import './signup.scss'

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Signup = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleChange = (e) => {
    e.preventDefault();
      const { name, value } = e.target;
      setFormFields({ ...formFields, [name]: value })
    };


    const handleSubmit = async (event) => {
        event.preventDefault()

      if (password !== confirmPassword) {
          alert('passwords do not match')
            return 
        }
        try {
          const { user } = await createAuthForEmailAndPassword(email, password);
          await createUserDocumentFromAuth(user, {displayName})
          resetFormFields()
        } catch (error) {
          if (error.code === 'auth/email-already-in-use') {
            alert('cannot create user. email/password already in use')
          }
            console.log('user creation encountered an error', error)
        }
    } 
  return (
    <div className = 'sign-up-container'>
      <h1>Don't have an account?</h1>
      <span>Sign up with your Email and Password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          required
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          required
        />

        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default Signup;
