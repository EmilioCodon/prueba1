import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserSlash } from "react-icons/fa";

const AccessDenied = () => {
  return (
    <div className="custom-container-tu-otro">
      <div style={{ gap: '1.5rem' }} className="login-register-container-tu-otro">
        <h1>Access Denied</h1>
        <p>
          Sorry, you do not have access to this page. Please log in or
          sign up to gain access to our site's content and features.
        </p>
        <FaUserSlash  style={{ fontSize: '3rem' }} />
        <p>
          If you already have an account,<br />
          please click here{' '}
          <Link to="/login" className="toregis">
            Login.
          </Link>
        </p>
        <p>
          If you don't have an account yet,<br />
          you can sign up{' '}
          <Link to="/register" className="toregis">
            Register.
          </Link>
        </p>
        <p>
          If you believe this is an error, please contact our support team
          at{' '}
          <a  style={{ color: '#03bcf4' }} href="mailto:emiliocodon@gmail.com">emiliocodon@gmail.com</a>{' '}
          for assistance.
        </p>
      </div>
    </div>
  );
};

export default AccessDenied;
