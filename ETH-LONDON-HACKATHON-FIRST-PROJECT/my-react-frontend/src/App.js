// App.js
import React, { useState } from 'react';
import Login from './Login';
import { AuthProvider } from './AuthContext';


const App = () => {
  const [page, setPage] = useState('main');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleClickEnter = () => {
    setPage('question');
  };

  const handleClickYes = () => {
    setPage('yes');
  };

  const handleClickNo = () => {
    setPage('no');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  const containerStyle = {
    textAlign: 'center',
    marginTop: '10%',
    fontFamily: 'Arial, sans-serif',
    background: `url('https://eskipaper.com/images/cool-light-pink-wallpaper-1.jpg') no-repeat center center fixed`,
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const textStyle = {
    fontSize: '64px',
    color: '#000000',
    marginTop: '40px',
    transition: 'opacity 0.5s ease',
  };

  const buttonStyle = {
    fontSize: '32px',
    padding: '20px',
    margin: '10px',
  };

  const responsiveContainerStyle = {
    ...containerStyle,
    '@media (max-width: 768px)': {
      marginTop: '20%',
    },
    '@media (max-width: 480px)': {
      marginTop: '30%',
    },
  };

  return (
    <div style={responsiveContainerStyle}>
      {page === 'main' && (
        <div>
          <h1 style={{ fontSize: '96px', fontWeight: 'bold', color: '#000000' }}>
            ETH LONDON HACKATHON 2023
          </h1>
          <button style={buttonStyle} onClick={handleClickEnter}>
            ENTER
          </button>
        </div>
      )}

      {page === 'yes' && (
        <div>
          <h2 style={textStyle}>
            Congratulations, you are eligible for winning Google Home.
          </h2>
          {!submitted ? (
            <div>
              <p style={textStyle}>Please enter your email to receive further instructions</p>
              <form onSubmit={handleFormSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  style={buttonStyle}
                />
                <button type="submit" style={buttonStyle}>
                  Submit
                </button>
              </form>
            </div>
          ) : (
            <p style={textStyle}>Thank You</p>
          )}
        </div>
      )}

      {page === 'question' && (
        <div>
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
      )}

      {page === 'no' && (
        <div>
          <h2 style={textStyle}>No problem! You can still win Google Home.</h2>
          <img
            src="https://www.freepngimg.com/thumb/web_design/31835-7-coder-file.png"
            alt="Just code something Better"
            style={{ width: '300px', height: '300px', marginTop: '20px' }}
          />
        </div>
      )}

      {/* Include the Login component */}
      <Login />
    </div>
  );
};

export default App;
