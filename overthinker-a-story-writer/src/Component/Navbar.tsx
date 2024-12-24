import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#e6e6e6",
          width: "100%",
          height: "70px",
          paddingLeft: "10px",
        }}
      >
        <div className="navbar-left">
          <h1
            style={{
              fontFamily: "Matemasie",
              fontSize: "40px",
              color: "#005ce6",
            }}
          >
            Ov<b style={{ color: "red", fontFamily: "Matemasie" }}>er</b>Think
            <b style={{ color: "red", fontFamily: "Matemasie" }}>er</b>
          </h1>
        </div>
        <div style={{ display: "flex" }}>
          <div></div>
          <div
            onClick={handleLogout}
            style={{
              margin: "20px",
              padding: "10px",
              borderRadius: "50px",
              width: "70px",
              textAlign: "center",
              backgroundColor: "#004466",
              color: "white",
              cursor: "pointer",
            }}
          >
            Logout
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
