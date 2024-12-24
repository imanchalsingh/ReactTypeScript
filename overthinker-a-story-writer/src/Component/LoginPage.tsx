import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() && email.trim()) {
      dispatch(login(username));
      navigate("/");
    }
  };

  return (
    <div
      className="login-bg-page"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "auto",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          fontFamily: "Matemasie",
          fontSize: "50px",
          color: "#005ce6",
        }}
      >
        Ov<b style={{ color: "red", fontFamily: "Matemasie" }}>er</b>Think
        <b style={{ color: "red", fontFamily: "Matemasie" }}>er</b>
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#669999",
          width: "500px",
          height: "370px",
          textAlign: "center",
          borderRadius: "20px",
          boxShadow: " 5px 5px 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <h1>Login</h1>
        <input
          style={{
            width: "300px",
            height: "30px",
            borderRadius: "50px",
            paddingLeft: "10px",
            margin: "20px",
          }}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={{
            width: "300px",
            height: "30px",
            borderRadius: "50px",
            paddingLeft: "10px",
            margin: "10px",
          }}
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          style={{
            margin: "20px",
            padding: "10px",
            borderRadius: "50px",
            width: "100px",
            backgroundColor: "#004466",
            color: "white",
            cursor: "pointer",
          }}
          onClick={handleLogin}
        >
          Login
        </button>
        <p style={{ color: "#666666" }}>&copy;Copyright-2024 by Anchal Singh</p>
      </div>
    </div>
  );
};

export default LoginPage;
