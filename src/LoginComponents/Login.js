import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import env from "../Backendurl";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "../CSS/Login.css";

// import Modal from "../Modal";

function Login() {
  let [email, setEmail] = useState("");

  let [password, setPassword] = useState("");
  let [toggle, setToggle] = useState(false);
  let [message, setMessage] = useState("");
  let navigate = useNavigate();

  let handleForgotpass = async () => {
    navigate("/Forgot");
  };

  let handleLogin = async () => {
    setToggle(true);
    let res = await axios.post(`${env.apiurl}/users/signin`, {
      email,
      password,
    });

    if (res.data.statusCode === 200) {
      setToggle(false);
      localStorage.setItem("token", res.data.token);
      navigate("/Kmart");
    } else {
      setToggle(false);
      setMessage(res.data.message);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  let handleSignUp = async () => {
    let res = await axios.post(`${env.apiurl}/users/signup`);

    if (res.data.statusCode === 200) {
      navigate("/Register");
    }
  };

  return (
    <>
      <div className="container-fluid wallpaper">
      
        <div className="login-wrapper ">
          <p>Login to Continue</p>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              className="mx-2 mt-2"
              variant="primary"
              onClick={() => handleLogin()}
            >
              Sign in
            </Button>
            <Button
              className="mx-2 mt-2"
              variant="primary"
              onClick={() => handleSignUp()}
            >
              Sign up
            </Button>
            <Button
              className="mx-2 mt-2"
              variant="primary"
              onClick={() => handleForgotpass()}
            >
              Forgot Password
            </Button>
          </Form>
          {toggle ? <Spinner animation="border" variant="primary" /> : <></>}
          {message ? (
            <div style={{ color: "red", textAlign: "center" }}>{message}</div>
          ) : (
            <></>
          )}
        </div>

        
      </div>
      <div className="text-center">
      <h3 >Login credentials details</h3>
         
          <p>Email: manifun51@gmail.com</p>
          <p>Password: abcd1234</p>
          <p>Card Number:  4242 4242 4242 4242</p>
          <p>Date: 07/30</p>
          <p>CVC: 233</p>
      </div>
      
    </>
  );
}

export default Login;
