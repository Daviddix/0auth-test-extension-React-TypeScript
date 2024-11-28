import { useState } from "react";
import "./Home.css"

interface ProfileProps {
  setLoggedInUserValue : Function;
}

function Home({setLoggedInUserValue} : ProfileProps) {

  function loginWithGoogle() {
    // Trigger OAuth flow to get an auth token
    chrome.identity.getAuthToken({ interactive: true }, (token) => {
      if (chrome.runtime.lastError) {
        console.error(`Login error: ${chrome.runtime.lastError.message}`);
        alert('Login failed: ' + chrome.runtime.lastError.message);
        return;
      }
  
      if (token) {
        console.log(`Token received: ${token}`);
        // Fetch user profile with the token
        fetchUserProfile(token);
      }
    });
  }

  function fetchUserProfile(token : string) {
    fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('User Profile:', data);
        setLoggedInUserValue(()=>{
          return{
          name : data.name,
          email : data.email,
          picture : data.picture
          }
        })
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
      });
  }
  return (
    <>
      <div className="home-body">
        <button
        onClick={loginWithGoogle}
        >Continue with Google</button>
      </div>
    </>
  )
}

export default Home