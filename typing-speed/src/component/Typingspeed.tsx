import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  TextField,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import { Badge as BootstrapBadge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logopic from "./logopic.png";

const InteractiveElement: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState<number>(0);
  const [accuracy, setAccuracy] = useState<number>(100);
  const [isTestActive, setIsTestActive] = useState<boolean>(false);
  const [highScore, setHighScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(60);

  const generateRandomText = () => {
    const sentences = [
      "The quick brown fox jumps over the lazy dog.",
      "A journey of a thousand miles begins with a single step.",
      "All that glitters is not gold.",
      "The early bird catches the worm.",
      "Actions speak louder than words.",
      "Where there's a will, there's a way.",
      "Knowledge is power, guard it well.",
      "A picture is worth a thousand words.",
      "To be or not to be, that is the question.",
      "Practice makes perfect.",
    ];
    setText(sentences[Math.floor(Math.random() * sentences.length)]);
  };

  const startTest = () => {
    generateRandomText();
    setInput("");
    setStartTime(Date.now());
    setEndTime(null);
    setWpm(0);
    setAccuracy(100);
    setIsTestActive(true);
    setTimeLeft(60);
  };

  const calculateStats = () => {
    if (!startTime) return;
    const currentTime = Date.now();
    const timeElapsed = (currentTime - startTime) / 60000;
    const wordsTyped = input.trim().split(/\s+/).length;
    const newWpm = Math.round(wordsTyped / timeElapsed);

    const correctChars = input
      .split("")
      .filter((char, index) => char === text[index]).length;
    const newAccuracy = Math.round((correctChars / input.length) * 100) || 100;

    setWpm(newWpm);
    setAccuracy(newAccuracy);

    if (input === text) {
      endTest();
    }
  };

  const endTest = () => {
    setEndTime(Date.now());
    setIsTestActive(false);
    if (wpm > highScore) {
      setHighScore(wpm);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isTestActive) {
      setInput(e.target.value);
      calculateStats();
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (isTestActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            endTest();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTestActive, timeLeft]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "20px",
      }}
    >
      <Card
        className="w-100 mx-auto shadow-lg"
        style={{
          width: "600px",
          borderRadius: "20px",
          background: "linear-gradient(to right, #E2FCDB, #ECE3F8)",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          height: "80vh",
        }}
      >
        <img style={{ width: "400px" }} src={Logopic} alt="" />
        <CardContent>
          <div
            className="p-3 rounded shadow-sm mb-3"
            style={{
              backgroundColor: "#f7f9ff",
              border: "1px solid #e0e4fc",
            }}
          >
            <Typography variant="body1" style={{ fontSize: "1.2em" }}>
              {text.split("").map((char, index) => (
                <span
                  key={index}
                  style={{
                    color:
                      input[index] === undefined
                        ? "gray"
                        : input[index] === char
                        ? "#4caf50"
                        : "#f44336",
                    fontWeight: "bold",
                  }}
                >
                  {char}
                </span>
              ))}
            </Typography>
          </div>

          <TextField
            variant="outlined"
            placeholder="Start typing here..."
            fullWidth
            margin="normal"
            value={input}
            onChange={handleInputChange}
            disabled={!isTestActive}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "10px",
            }}
            inputProps={{
              style: {
                padding: "12px",
                fontSize: "1.1em",
              },
            }}
          />

          <CardActions className="justify-content-between">
            <Button
              onClick={startTest}
              disabled={isTestActive}
              variant="contained"
              style={{
                backgroundColor: "#3f51b5",
                color: "white",
                borderRadius: "20px",
                padding: "8px 16px",
                fontWeight: "bold",
              }}
            >
              {isTestActive ? "Test in progress..." : "Start Test"}
            </Button>

            <div className="d-flex justify-content-around w-50">
              <BootstrapBadge bg="primary" style={{ fontSize: "1em" }}>
                WPM: {wpm}
              </BootstrapBadge>
              <BootstrapBadge bg="success" style={{ fontSize: "1em" }}>
                Accuracy: {accuracy}%
              </BootstrapBadge>
              <BootstrapBadge bg="warning" style={{ fontSize: "1em" }}>
                Time Left: {timeLeft}s
              </BootstrapBadge>
              <BootstrapBadge bg="info" style={{ fontSize: "1em" }}>
                High Score: {highScore} WPM
              </BootstrapBadge>
            </div>
          </CardActions>

          {endTime && (
            <Alert
              severity="success"
              className="mt-3 shadow-sm"
              style={{
                backgroundColor: "#e6ffea",
                borderRadius: "10px",
              }}
            >
              <AlertTitle>Test Completed!</AlertTitle>
              <Typography variant="body2" style={{ fontWeight: "bold" }}>
                Your final WPM: {wpm} | Accuracy: {accuracy}%
              </Typography>
              {input === text && (
                <Typography component="span" color="success.main">
                  Text completed successfully! 🎉
                </Typography>
              )}
              {wpm === highScore && (
                <Typography component="span" color="success.main">
                  New High Score! 🏆
                </Typography>
              )}
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveElement;
