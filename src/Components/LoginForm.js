import React from 'react';
import LoginButton from "./LoginButton";
import LogoutButton from './LogoutButton';




const LoginForm = () => {




    return(
        <div className="App">
            <header className="App-header">
                <img src="/favicon.png" className="App-logo" alt="logo" />
            
                <LoginButton />
                <LogoutButton />
            </header>
        </div>





    )


}

export default LoginForm