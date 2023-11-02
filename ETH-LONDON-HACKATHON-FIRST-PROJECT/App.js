import { getAuth, signInAnonymously, signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import app from "./firebase";



const App = () => {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState('main');

  useEffect(() => {
    console.log("firebase", firebase)
    const authListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => {
      authListener();
    };
  }, []);

  const handleClickEnter = () => {
    if (user) {
      setPage('question');
    } else {
      firebase.auth().signInAnonymously().catch((error) => {
        console.error('Error signing in anonymously:', error);
      });
    }
  };

  const handleClickYes = () => {
    setPage('yes');
  };

  const handleClickNo = () => {
    setPage('no');
  };

  const handleSignOut = () => {
    firebase.auth().signOut().catch((error) => {
      console.error('Error signing out:', error);
    });
    setUser(null);
    setPage('main');
  };

  const containerStyle = {
    textAlign: 'center',
    marginTop: '200px',
    fontFamily: 'Arial, sans-serif',
    background: `url('https://eskipaper.com/images/cool-light-pink-wallpaper-1.jpg') no-repeat center center fixed`,
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const titleStyle = {
    fontSize: '96px',
    fontWeight: 'bold',
    color: '#000000',
  };

  const textStyle = {
    fontSize: '64px',
    color: '#000000',
    marginTop: '40px',
  };

  const buttonStyle = {
    fontSize: '32px',
    padding: '20px',
    margin: '10px',
  };

  const renderContent = () => {
    if (page === 'main') {
      return (
        <div style={containerStyle}>
          <h1 style={titleStyle}>ETH LONDON HACKATHON</h1>
          <button style={buttonStyle} onClick={handleClickEnter}>
            ENTER
          </button>
        </div>
      );
    } else if (page === 'question') {
      return (
        <div style={containerStyle}>
          <h2 style={textStyle}>
            Hey STROMWISE, hope you are done with the Google Cloud Bounty.
          </h2>
          <button style={buttonStyle} onClick={handleClickYes}>
            Yes
          </button>
          <button style={buttonStyle} onClick={handleClickNo}>
            No
          </button>
        </div>
      );
    } else if (page === 'yes') {
      return (
        <div style={containerStyle}>
          <h2 style={textStyle}>Congratulations, you are eligible for winning Google Home.</h2>
        </div>
      );
    } else if (page === 'no') {
      return (
        <div style={containerStyle}>
          <h2 style={textStyle}>No problem! You can still win Google Home.</h2>
        </div>
      );
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <button style={{ ...buttonStyle, position: 'absolute', top: '20px', right: '20px' }} onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      ) : (
        <div style={containerStyle}>
          <h1 style={titleStyle}>ETH LONDON HACKATHON</h1>
          <button style={buttonStyle} onClick={handleClickEnter}>
            ENTER
          </button>
        </div>
      )}
      {renderContent()}
    </div>
  );
};

export default App;

