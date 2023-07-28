import React, { useState } from "react";
import "./style.css";
import logo from "../../assets/images/amazon-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseConfig/FirebaseConfig";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [rePasswordError, setRePasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();
  function handleRegister(e) {
    e.preventDefault();
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      setEmailError("Invalid Email Format");
    }else {
      setEmailError("");
    }
    if (rePassword !== password) {
      setRePasswordError("Password not identical");
    }else {
      setRePasswordError("")
    }
    createUserWithEmailAndPassword(auth, email, password)
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
      <div>
        <div className="register">
          <img src={logo} id="amazon-icon" alt="" />
          <div className="card">
            <form id="form" onSubmit={(e) => handleRegister(e)}>
              <h1>Create account</h1>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="First and Last name" onChange={(e) => localStorage.setItem("name",e.target.value)}/>
              <label htmlFor="mobile">Email</label>
              <input
                type="text"
                id="mobile"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <div className="email-error">{emailError}</div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="At least 6 Characters"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <div className="alert">
                <i className="fa-solid fa-info" style={{ color: "#629dba" }} />
                Passwords must be at least 6 characters.
              </div>
              <label htmlFor="re-password">Re-enter password</label>
              <input
                type="password"
                id="re-password"
                onChange={(e) => setRePassword(e.target.value)}
              />
              <div className="re-pass-error">{rePasswordError}</div>
              <button type="submit" id="btn">
                Continue
              </button>
            </form>
            <p className="services">
              By continuing, you agree to Amazon's{" "}
              <a href="#">Conditions of Use</a> and{" "}
              <a href="#">Privacy Notice.</a>
            </p>
            <div className="helping">
              <div className="signIn">
                Already have an account?<Link to="/Sign">Sign in</Link>
                <i
                  className="fa-solid fa-caret-right"
                  style={{ fontSize: "10px", color: "#0066c0" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-section">
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
      </div>
    </>
  );
}
