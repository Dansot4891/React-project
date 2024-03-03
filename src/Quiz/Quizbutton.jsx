import React, { useState } from 'react';
import SelectType from './SelectType';
import MainContent from './MainContent';
import './Quiz.css';

function QuizButton() {
  const [Type, setType] = useState("Subjective");

const ButtonStyle = {
  height:"50px",
  width: "150px",
  fontSize: "24px",
  fontWeight:"500",
  backgroundColor: "#8C8C8C",
  color: "#000000",
  border: "none",
  cursor: "pointer",
  borderRadius: "10px",
  marginRight: "10px",
  transition: "background-color 0.3s ease",
};

const ActiveButton = {
  height:"50px",
  width: "150px",
  fontSize: "24px",
  fontWeight:"500",
  backgroundColor: "#1D85FF",
  color: "#ffffff",
  border: "none",
  cursor: "pointer",
  borderRadius: "10px",
  marginRight: "10px",
  transition: "background-color 0.3s ease",
};

  return (
    <div style={{ marginTop: "50px", backgroundColor: "#EBEBEB" }} className='page'>
      <div style={{ marginTop: "80px", fontSize: "28px", fontWeight: "500" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "18px", fontWeight: "800", color: "#1D85FF" }}>
            <p>퀴즈 맞추기</p>
          </div>
          <div style={{ fontSize: "20px" }}>
            <h2>새로운 한국의 문화를 알아볼까요?</h2>
          </div>
        </div>
      </div>
      <div className="button-container">
      <button style={Type === "Subjective" ? ActiveButton : ButtonStyle} onClick={() => setType("Subjective")}>
          주관식
        </button>
        <button style={Type === "OX" ? ActiveButton : ButtonStyle} onClick={() => setType("OX")}>
          O / X
        </button>
        <button style={Type === "Multichoice" ? ActiveButton : ButtonStyle} onClick={() => setType("Multichoice")}>
          객관식
        </button>
      </div>
      <SelectType.Provider value={{ Type }}>
        <MainContent />
      </SelectType.Provider>
    </div>
  );
}

export default QuizButton;