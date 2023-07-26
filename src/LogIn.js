import React, { useState } from "react";
import "./LogIn.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function LogIn() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    //firebase login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //it succesessfully created user with email and password
        if (auth) {
          history("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    //firebase rigister
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //it succesessfully created user with email and password
        if (auth) {
          history("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="data:image/png;base64,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"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1>Sing-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login_signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE condition of use &
          sale. Please see our Privacy Notice, our Cookies Notice and our
          Intrest-Based Ads Notice
        </p>
        <button onClick={register} className="login_registerButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default LogIn;
