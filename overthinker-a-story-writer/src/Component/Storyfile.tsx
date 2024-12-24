import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStory, editStory, removeStory } from "../redux/storySlice";
import { RootState } from "../redux/store";
import Modal from "./Model";
import { Story } from "../redux/type";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { Divider } from "@mui/material";
import axios from "axios";

const StoryPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [grammarIssues, setGrammarIssues] = useState<string[]>([]);
  const [highlightColor, setHighlightColor] = useState<string>("#FFFF00");
  const dispatch = useDispatch();
  const stories = useSelector((state: RootState) => state.story.stories);
  const storyRef = useRef<HTMLDivElement>(null);

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
    if (storyRef.current) {
      const storyContent = storyRef.current.innerHTML.trim();

      if (storyContent) {
        const grammarCheckResults = await checkGrammar(storyContent);
        if (grammarCheckResults.length > 0) {
          setGrammarIssues(
            grammarCheckResults.map((issue: any) => issue.message)
          );
        } else {
          const currentDate = new Date().toLocaleString();
          if (editId !== null) {
            dispatch(
              editStory({
                id: editId,
                title: title,
                content: storyContent,
                date: currentDate,
              })
            );
          } else {
            dispatch(
              addStory({
                id: Date.now(),
                title: title,
                content: storyContent,
                date: currentDate,
              })
            );
          }
          storyRef.current.innerHTML = "";
          setTitle("");
          setEditId(null);
          setGrammarIssues([]);
        }
      }
    }
  };

  const handleEdit = (story: Story) => {
    setTitle(story.title);
    setStory(story.content);
    setEditId(story.id);
    setModalOpen(false);
  };

  const handleRemove = (id: number) => {
    dispatch(removeStory(id));
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

    // Clear selection
    selection.removeAllRanges();
  };

  return (
    <div className="bg-page" style={{ padding: "20px", overflow: "hidden" }}>
      <h1 style={{ fontFamily: "Matemasie", marginTop: "-10px" }}>Story</h1>
      <input
        style={{ fontSize: "20px" }}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Story Title"
      />
      <div
        className="textarea"
        ref={storyRef}
        contentEditable
        style={{
          height: "50vh",
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "20px",
          overflowY: "auto",
          backgroundColor: "#d9d9d9",
          borderRadius: "10px",
        }}
        aria-placeholder="Write your story here..."
        onInput={() => {
          if (storyRef.current) {
            setStory(storyRef.current.innerHTML);
          }
        }}
      ></div>
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

      <Modal isOpen={isModalOpen} onClose={closeModal} title="My Stories">
        <ul>
          {stories.map((s, index) => (
            <li key={index}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h2>{s.title}</h2>
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
                    onClick={() => handleEdit(s)}
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
                    onClick={() => handleRemove(s.id)}
                  >
                    <DeleteIcon sx={{ color: "red" }} />
                  </button>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: s.content }} />
              <Divider />
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
};

export default StoryPage;
