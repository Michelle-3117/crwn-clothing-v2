import React from 'react';
import Signup from '../../components/sign-up/Signup';
import Signin from '../../components/sign-in/Signin'
import './authentication.scss'

const Authentication = () => {  
    return (
      <div className='authentication-container'>
        {/* <button onClick={logInWithGoogle}>sign in with google</button> */}
        <Signin />
        <Signup />
      </div>
    );
}

export default Authentication;