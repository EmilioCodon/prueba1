import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContex";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const { user, loginUser } = useAuth();

  const loginForm = useRef(null);

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = loginForm.current.email.value;
    const password = loginForm.current.password.value;

    const userInfo = { email, password };

    loginUser(userInfo);
  };

  return (
    <div className="azul33">
      <div className="custom-container-tu-otro">
        <div className="login-register-container-tu-otro">
          <form onSubmit={handleSubmit} ref={loginForm}>
            <div className="form-field-wrapper-tu-otro">
              <label className="label">Email:</label>
              <input
                required
                type="email"
                name="email"
                placeholder="Enter email..."
              />
            </div>

            <div className="form-field-wrapper-tu-otro">
              <label className="label">Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password..."
              />
            </div>

            <div className="form-field-wrapper-tu-otro">
              <input type="submit" value="Login" className="btn-tu-otro" />
            </div>
          </form>
          <p>
            Don't have an account? <Link to="/register" className="toregis">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
