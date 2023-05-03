import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import userEvent from '@testing-library/user-event';

var stylingObject={
  log:{
    backgroundColor: "transparent",
    border: "2px solid var(--primary-color)",
    padding: "0.5rem 1rem",
    borderRadius: "50px",
    fontSize: "1rem",
    color: "white",
  }
}
export default function Log() {
    const {loginWithRedirect,isAuthenticated,logout,user } = useAuth0();
  return (
    <div>
      {isAuthenticated && <p>{user.name}</p>}
        { isAuthenticated ? <button style={stylingObject.log} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </button>
        :
        (<button style={stylingObject.log} onClick={() => loginWithRedirect()}>Log In</button>)}
    </div>
  )
}
