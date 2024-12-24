import React, { useState } from "react";
import { questions } from "../qaData";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container } from "@mui/material";
import Navbar from "./Navbar";
import InfiniteScroll from "react-infinite-scroll-component";
import Divider from "@mui/material/Divider";

export default function Content() {
  const maxLimit = 11;
  const [initialDataLength, setInitialDataLength] = useState(maxLimit);
  const [data] = useState(questions);
  const [currentAudioPlaying, setCurrentAudioPlaying] = useState<any>("");

  const speak = (message: string, id: any) => {
    setCurrentAudioPlaying(id);
    let msg = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(msg);
    const toggle = document.getElementById("toggle-" + id) as HTMLElement;
    if (toggle && toggle.textContent === "Speak") {
      toggle.innerHTML = "Stop";
    } else if (toggle) {
      toggle.innerHTML = "Speak";
      if (toggle.innerHTML === "Speak") {
        window.speechSynthesis.cancel();
      }
    }
  };
  return (
    <>
      <div>
        <Navbar />
        <div style={{ lineHeight: "0.5", padding: "20px" }}>
          <h2 style={{ fontFamily: "Acme" }}>Important Questions of React:</h2>
          <Divider />

          <p style={{ fontFamily: "Acme" }}>You must know this Thesis:</p>
        </div>
        <InfiniteScroll
          dataLength={initialDataLength}
          hasMore={true}
          loader={<></>}
          next={() => {
            setTimeout(() => {
              setInitialDataLength(initialDataLength + maxLimit);
            }, 1000);
          }}
        >
          {data.slice(0, initialDataLength).map((items, idx) => {
            return (
              <Container key={idx}>
                <div>
                  <Accordion
                    className="accordian"
                    sx={{
                      marginTop: "10px",
                      boxShadow: "0px 0px 1px 0px",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Acme",
                        }}
                      >
                        {items.id}-
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Acme",
                          marginLeft: "10px",
                        }}
                      >
                        {items.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ borderLeft: "5px solid #ff3131" }}>
                      <Typography sx={{ fontFamily: "Acme", color: "#737373" }}>
                        {items.answer}
                      </Typography>
                      <button
                        style={{
                          fontFamily: "Acme",
                          fontWeight: "bolder",
                          fontSize: "20px",
                          cursor: "pointer",
                          color: "#ff3131",
                          border: "2px solid #ff3131",
                          width: "82px",
                          borderRadius: "50px",
                          textAlign: "center",
                          margin: "20px",
                        }}
                        type="submit"
                        onClick={() => {
                          speak(
                            items.question + "\n\n" + items.answer,
                            items.id
                          );
                        }}
                        id={"toggle-" + items.id}
                      >
                        Speak
                      </button>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Container>
            );
          })}
        </InfiniteScroll>
      </div>
    </>
  );
}
