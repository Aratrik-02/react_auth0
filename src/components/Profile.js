import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && ( 
     <div className="container-small">
        <h1>Highly Classified information</h1>
        <div><img src={user.picture} alt={user.name} /></div>
        <div><h2>{user.name}</h2></div>
        <div><p>{user.email}</p></div>
        <div><JSONPretty data={user} /></div>
      </div>
    )
  )
}

export default Profile