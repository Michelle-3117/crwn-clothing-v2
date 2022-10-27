import React from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/Firebase";

const Signin = () => {
    const logInWithGoogle = async () => { 
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user)
    }
    
    return (
        <div>
            <h1>Signin</h1>
            <button onClick={logInWithGoogle}>sign in with google</button>
        </div>
  )
}

export default Signin