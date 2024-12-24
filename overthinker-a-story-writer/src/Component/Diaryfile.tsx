import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDiary, editDiary, removeDiary } from "../redux/diarySlice";
import { RootState } from "../redux/store";
import Modal from "./Model";
import { DiaryEntry } from "../redux/type";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { Divider } from "@mui/material";
import axios from "axios";

const DiaryPage: React.FC = () => {
  const [diary, setDiary] = useState<string>("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [grammarIssues, setGrammarIssues] = useState<string[]>([]);
  const [highlightColor, setHighlightColor] = useState<string>("#FFFF00"); // Default color: yellow
  const dispatch = useDispatch();
  const diaries = useSelector((state: RootState) => state.diary.diaries);
  const diaryRef = useRef<HTMLDivElement>(null);

  const checkGrammar = async (text: string) => {
    try {
      const response = await axios.post(
        "https://api.languagetoolplus.com/v2/check",
        {
          text: text,
          language: "en-US",
        }
      );

      return response.data.matches;
    } catch (error) {
      console.error("Error checking grammar:", error);
      return [];
    }
  };

  const handleSubmit = async () => {
    if (diaryRef.current) {
      const diaryContent = diaryRef.current.innerHTML.trim();

      if (diaryContent) {
        const grammarCheckResults = await checkGrammar(diaryContent);
        if (grammarCheckResults.length > 0) {
          setGrammarIssues(
            grammarCheckResults.map((issue: any) => issue.message)
          );
        } else {
          const currentDate = new Date().toLocaleString();
          if (editId !== null) {
            dispatch(
              editDiary({
                id: editId,
                content: diaryContent,
                date: currentDate,
              })
            );
          } else {
            dispatch(
              addDiary({
                id: Date.now(),
                content: diaryContent,
                date: currentDate,
              })
            );
          }
          diaryRef.current.innerHTML = "";
          setEditId(null);
          setGrammarIssues([]);
        }
      }
    }
  };

  const handleEdit = (entry: DiaryEntry) => {
    if (diaryRef.current) {
      diaryRef.current.innerHTML = entry.content;
    }
    setEditId(entry.id);
    setModalOpen(false);
  };

  const handleRemove = (id: number) => {
    dispatch(removeDiary(id));
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const highlightSelection = () => {
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const span = document.createElement("span");
    span.style.backgroundColor = highlightColor;
    span.appendChild(range.extractContents());
    range.insertNode(span);
  };

  return (
    <div className="bg-page" style={{ padding: "20px" }}>
      <h1 style={{ fontFamily: "Matemasie", marginTop: "-10px" }}>Diary</h1>
      <div
        className="textarea"
        ref={diaryRef}
        contentEditable
        style={{
          height: "65vh",
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "20px",
          overflowY: "auto",
          backgroundColor: "#d9d9d9",
          borderRadius: "10px",
        }}
        aria-placeholder="Write your diary entry here..."
        onInput={(e) => setDiary((e.target as HTMLDivElement).innerHTML)}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <div style={{ display: "flex", marginTop: "20px" }}>
          <div>
            <button
              onClick={highlightSelection}
              style={{
                marginLeft: "10px",
                padding: "5px",
                borderRadius: "5px",
                cursor: "pointer",
                backgroundColor: "#004466",
                color: "white",
              }}
            >
              Highlight
            </button>
          </div>
          <div>
            <input
              type="color"
              id="colorPicker"
              value={highlightColor}
              onChange={(e) => setHighlightColor(e.target.value)}
              style={{ width: "100px", height: "50px" }}
            />
          </div>
        </div>
        <div>
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
            onClick={handleSubmit}
          >
            {editId !== null ? "Update" : "Submit"}
          </button>
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
            onClick={openModal}
          >
            My Story
          </button>
        </div>
      </div>

      {grammarIssues.length > 0 && (
        <div className="grammar-issues">
          <h3>Grammar Issues:</h3>
          <ul>
            {grammarIssues.map((issue, index) => (
              <li key={index}>{issue}</li>
            ))}
          </ul>
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal} title="My Diaries">
        <ul>
          {diaries.map((d) => (
            <li key={d.id}>
              <em>({d.date})</em>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p dangerouslySetInnerHTML={{ __html: d.content }}></p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    alignItems: "center",
                  }}
                >
                  <button
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      border: "none",
                      textAlign: "center",
                    }}
                    onClick={() => handleEdit(d)}
                  >
                    <CreateIcon sx={{ color: "#005ce6" }} />
                  </button>
                  <button
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      border: "none",
                      textAlign: "center",
                    }}
                    onClick={() => handleRemove(d.id)}
                  >
                    <DeleteIcon sx={{ color: "red" }} />
                  </button>
                </div>
              </div>
              <Divider />
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
};

export default DiaryPage;
