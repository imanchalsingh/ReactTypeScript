import React from "react";
import Logo from "./logo.png";

export default function Navbar() {
  return (
    <div>
      <nav
        style={{
          backgroundColor: "#fff",
          borderBottom: "2px solid #d9d9d9",
          width: "100%",
          display: "flex",
        }}
      >
        <img
          className="image"
          style={{ width: "300px" }}
          src={Logo}
          alt="logo"
        />
      </nav>
    </div>
  );
}
