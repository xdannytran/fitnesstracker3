import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom';




const LoginButton = () => {


    const {loginWithRedirect} = useAuth0();
    const navigate =  useNavigate()

    const handleLogin = (e) =>{

      

      loginWithRedirect();
      navigate('/home')


    }
    
  return (
    <button onClick={() =>handleLogin()}>
        Log In
    </button>
  )
}

export default LoginButton