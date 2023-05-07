import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import userEvent from '@testing-library/user-event';
import { Cred } from './Log.styled';


export default function Log() {
    const {loginWithRedirect,isAuthenticated,logout,user } = useAuth0();
  return (
    <div>
      {isAuthenticated && <p>{user.name}</p>}
        { isAuthenticated ? <Cred onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </Cred>
        :
        (<Cred onClick={() => loginWithRedirect()}>Log In</Cred>)}
    </div>
  )
}
