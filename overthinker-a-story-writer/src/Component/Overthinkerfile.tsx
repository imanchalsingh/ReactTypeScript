import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {} from "../redux/authSlice";
import { RootState } from "../redux/store";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DiaryLogo from "./simple_and_classic_image_logo_of_diary.jpeg";
import StoryLogo from "./simple_and_classic_image_logo_of_story.jpeg";

const MainPage: React.FC = () => {
  const username = useSelector((state: RootState) => state.auth.user);

  return (
    <div>
      <div
        className="main-bg-page"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: "column",
        }}
      >
        {" "}
        <Navbar />
        <h1 style={{ color: "#ffffff" }}>Welcome, {username}!</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Link to="/story">
            <img
              style={{
                width: "450px",
                height: "200px",
                borderRadius: "20px",
                border: "none",
                margin: "10px",
                fontSize: "30px",
                fontFamily: "Rowdies",
                cursor: "pointer",
                fontWeight: "bold",
                backgroundColor: "white",
              }}
              src={StoryLogo}
              alt=""
            />
          </Link>
          <Link to="/diary">
            <img
              style={{
                width: "450px",
                height: "200px",
                borderRadius: "20px",
                border: "none",
                margin: "10px",
                fontSize: "30px",
                fontFamily: "Rowdies",
                cursor: "pointer",
                fontWeight: "bold",
                backgroundColor: "white",
                boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)",
              }}
              src={DiaryLogo}
              alt=""
            />
          </Link>
        </div>
        <p style={{ color: "#ffffff" }}>Over thinking is a power.</p>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
