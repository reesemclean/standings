import React from 'react';
import SignupPage from './SignupPage/SignupPage.js';
import LoginPage from './LoginPage/LoginPage.js';

class AuthenticationContainer extends React.Component {
  render() {
    return (
      <div className="authentication-container">
        {this.props.children}
      </div>
    );
  }
}

AuthenticationContainer.defaultProps = {
};

export default AuthenticationContainer;
