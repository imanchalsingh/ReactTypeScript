import React, { useState } from "react";
import Logo from "./logopic.png";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { mathematics } from "../mathData";
import { physics } from "../physicsData";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { chemistry } from "../chemistryData";
import Logo2 from "./logopic2.png";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Mainpage() {
  const [mathData] = useState(mathematics);
  const [physicsData] = useState(physics);
  const [chemistryData] = useState(chemistry);
  const [openMathDialogBox, setOpenMathDialogBox] = useState(false);
  const [openPhysicsDialogBox, setOpenPhysicsDialogBox] = useState(false);
  const [openChemistryDialogBox, setOpenChemistryDialogBox] = useState(false);

  const openChemistry = () => {
    setOpenChemistryDialogBox(true);
  };
  const closeChemistry = () => {
    setOpenChemistryDialogBox(false);
  };
  const openPhysics = () => {
    setOpenPhysicsDialogBox(true);
  };
  const closePhysics = () => {
    setOpenPhysicsDialogBox(false);
  };
  const openMath = () => {
    setOpenMathDialogBox(true);
  };
  const closeMath = () => {
    setOpenMathDialogBox(false);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-100px",
          }}
        >
          <img className="mainlogo" src={Logo} alt="" />
        </div>
        <p style={{ textAlign: "center" }}>Welcome to GlobalEDU.com</p>
        <div
          className="itemdiv"
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "90px",
          }}
        >
          <div
            className="mathdiv"
            onClick={openMath}
            style={{
              backgroundColor: "#f2f2f2",
              textAlign: "center",
              padding: "30px",
              width: "20%",
              borderLeft: "10px solid #1a8cff",
              cursor: "pointer",
            }}
          >
            <h1>Mathematics</h1>
          </div>
          <div
            className="phydiv"
            onClick={openPhysics}
            style={{
              backgroundColor: "#f2f2f2",
              textAlign: "center",
              padding: "30px",
              width: "20%",
              borderLeft: "10px solid #1a8cff",
              cursor: "pointer",
            }}
          >
            <h1>Physics</h1>
          </div>
          <div
            className="chediv"
            onClick={openChemistry}
            style={{
              backgroundColor: "#f2f2f2",
              textAlign: "center",
              padding: "30px",
              width: "20%",
              cursor: "pointer",
              borderLeft: "10px solid #1a8cff",
            }}
          >
            <h1>Chemistry</h1>
          </div>
        </div>
      </div>

      {openMathDialogBox && (
        <React.Fragment>
          <Dialog open={openMathDialogBox} fullScreen>
            <IconButton
              onClick={closeMath}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <div
              className="title"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginRight: "50px",
              }}
            >
              <img className="logo" src={Logo2} alt="" />
              <h1
                style={{
                  marginTop: "-1px",
                  color: "#009999",
                }}
              >
                Mathematics
              </h1>
            </div>

            <DialogContent>
              {mathData.map((mathItem, idx) => {
                return (
                  <div key={idx}>
                    <div
                      style={{
                        backgroundColor: "#f2f2f2",
                        padding: "30px",
                        borderLeft: "10px solid #1a8cff",
                        cursor: "pointer",
                        marginTop: "20px",
                      }}
                    >
                      <h1>{mathItem.category}</h1>
                      {mathItem.concepts.map((item) => {
                        return (
                          <Accordion>
                            <AccordionSummary
                              aria-controls="panel1d-content"
                              id="panel1d-header"
                            >
                              <Typography>{item.name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>{item.formula}</Typography>
                              <Typography>{item.description}</Typography>
                            </AccordionDetails>
                          </Accordion>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </DialogContent>
          </Dialog>
        </React.Fragment>
      )}
      {openPhysicsDialogBox && (
        <React.Fragment>
          <Dialog open={openPhysicsDialogBox} fullScreen>
            <IconButton
              onClick={closePhysics}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <div
              className="title"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginRight: "50px",
              }}
            >
              <img className="logo" src={Logo2} alt="" />
              <h1
                style={{
                  marginTop: "-1px",
                  color: "#009999",
                }}
              >
                Physics
              </h1>
            </div>
            <DialogContent>
              {physicsData.map((physicsItem, idx) => {
                return (
                  <div key={idx}>
                    <div
                      style={{
                        backgroundColor: "#f2f2f2",
                        padding: "30px",
                        borderLeft: "10px solid #1a8cff",
                        cursor: "pointer",
                        marginTop: "20px",
                      }}
                    >
                      <h1>{physicsItem.category}</h1>
                      {physicsItem.concepts.map((item) => {
                        return (
                          <Accordion>
                            <AccordionSummary
                              aria-controls="panel1d-content"
                              id="panel1d-header"
                            >
                              <Typography>{item.name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>{item.formula}</Typography>
                              <Typography>{item.description}</Typography>
                            </AccordionDetails>
                          </Accordion>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </DialogContent>
          </Dialog>
        </React.Fragment>
      )}
      {openChemistryDialogBox && (
        <React.Fragment>
          <Dialog open={openChemistryDialogBox} fullScreen>
            <IconButton
              onClick={closeChemistry}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <div
              className="title"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginRight: "50px",
              }}
            >
              <img className="logo" src={Logo2} alt="" />
              <h1
                style={{
                  marginTop: "-1px",
                  color: "#009999",
                }}
              >
                Chemistry
              </h1>
            </div>
            <DialogContent>
              {chemistryData.map((chemistryItem, idx) => {
                return (
                  <div key={idx}>
                    <div
                      style={{
                        backgroundColor: "#f2f2f2",
                        padding: "30px",
                        borderLeft: "10px solid #1a8cff",
                        cursor: "pointer",
                        marginTop: "20px",
                      }}
                    >
                      <h1>{chemistryItem.category}</h1>
                      {chemistryItem.concepts.map((item) => {
                        return (
                          <Accordion>
                            <AccordionSummary
                              aria-controls="panel1d-content"
                              id="panel1d-header"
                            >
                              <Typography>{item.name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>{item.description}</Typography>
                            </AccordionDetails>
                          </Accordion>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </DialogContent>
          </Dialog>
        </React.Fragment>
      )}
    </>
  );
}
