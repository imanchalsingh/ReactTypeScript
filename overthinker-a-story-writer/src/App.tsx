import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import MainPage from "./Component/Overthinkerfile";
import StoryPage from "./Component/Storyfile";
import DiaryPage from "./Component/Diaryfile";
import LoginPage from "./Component/LoginPage";
import { RootState } from "./redux/store";
import "./App.css";

const App: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {isLoggedIn ? (
          <>
            <Route path="/" element={<MainPage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/diary" element={<DiaryPage />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
