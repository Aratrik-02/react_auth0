import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <>
            <div className="container"><h1>Secret society</h1></div>
            <div className="container">Want to get access to a lot of data? Join the cause</div>
            <button onClick={() => loginWithRedirect()}>
                Join us
            </button>
            </>
        )
    )
}

export default LoginButton