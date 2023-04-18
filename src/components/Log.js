import React from 'react'
import './Log.css'
import { useAuth0 } from "@auth0/auth0-react";
import userEvent from '@testing-library/user-event';
export default function Log() {
    const {loginWithRedirect,isAuthenticated,logout,user } = useAuth0();
  return (
    <div>
      {isAuthenticated && <p>{user.name}</p>}
        { isAuthenticated ? <button className="log" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </button>
        :
        (<button className="log" onClick={() => loginWithRedirect()}>Log In</button>)}
    </div>
  )
}
