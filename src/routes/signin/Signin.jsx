import React from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/Firebase";
import Signup from '../../components/sign-up/Signup';

const Signin = () => {  
  const logInWithGoogle = async () => { 
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user)
    }
    
    return (
      <div>
        <h1>Sign In Page</h1>
        <button onClick={logInWithGoogle}>sign in with google</button>
        <Signup />
      </div>
    );
}

export default Signin