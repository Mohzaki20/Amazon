import React, { useState } from "react";
import "./style.css";
import logo from "../../assets/images/amazon-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseConfig/FirebaseConfig";
export default function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSign(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <div className="sign" dir="ltr">
        <img src={logo} id="amazon-icon" alt="" />
        <div className="card">
          <form id="SignForm" onSubmit={(e) => handleSign(e)}>
            <h1>Sign in</h1>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="error-msg"></div>
            <label htmlFor="email">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="pass-msg" />
            <button type="submit" id="btn-sign">
              Continue
            </button>
          </form>
          <p className="services">
            By continuing, you agree to Amazon's{" "}
            <a href="#">Conditions of Use</a> and{" "}
            <a href="#">Privacy Notice.</a>
          </p>
          <div className="helping">
            <i
              className="fa-solid fa-caret-right"
              style={{ fontSize: "12px", color: "#666" }}
            />
            <span>
              <a href="#" id="sign-link">
                Need help?
              </a>
            </span>
          </div>
        </div>
        <div className="line" />

        <Link to="/register" id="create-btn">
          Create Amazon Account
        </Link>
      </div>
      <div className="bottom-section-sign">
        <div>
          <div className="link">
            <a href="#">Conditions of Use</a>
            <a href="#">Privacy Notice.</a>
            <a href="#">Help</a>
          </div>
          <div className="description">
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </div>
    </>
  );
}
