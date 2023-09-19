import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContex";
import { useHistory } from "react-router-dom";

const Register = () => {
  const registerForm = useRef(null);
  const { user, registerUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user, history]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = registerForm.current.name.value;
    const email = registerForm.current.email.value;
    const password1 = registerForm.current.password1.value;
    const password2 = registerForm.current.password2.value;

    if (password1 !== password2) {
      alert("Passwords did not match!");
      return;
    }

    const userInfo = { name, email, password1, password2 };

    registerUser(userInfo);
  };

  return (
    <div className="azul3">
    <div className="custom-container-register">
      <div className="login-register-container-register">
        <form ref={registerForm} onSubmit={handleSubmit}>
          <div className="form-field-wrapper-register">
            <label className="label-register">Name:</label>
            <input
              required
              type="text"
              name="name"
              placeholder="Enter name..."
              className="input-register"
            />
          </div>

          <div className="form-field-wrapper-register">
            <label className="label-register">Email:</label>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter email..."
              className="input-register"
            />
          </div>

          <div className="form-field-wrapper-register">
            <label className="label-register">Password:</label>
            <input
              type="password"
              name="password1"
              placeholder="Enter password..."
              className="input-register"
            />
          </div>

          <div className="form-field-wrapper-register">
            <label className="label-register">Confirm Password:</label>
            <input
              type="password"
              name="password2"
              placeholder="Confirm password..."
              className="input-register"
            />
          </div>

          <div className="form-field-wrapper-register">
            <input type="submit" value="Register" className="btn-register" />
          </div>
        </form>

        <p>
          Already have an account? <Link to="/login" className="toregis">Login</Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Register;
