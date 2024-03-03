import React from "react";
import { motion } from "framer-motion";

const Song = ({ title, singer, mp3, backgroundImage }) => {
  const containerStyle = {
    marginBottom:"30px",
    border: "1px solid #ddd",
    padding:"3px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", 
  };

  const cardStyle = {
    position: "relative",
    zIndex: 1,  
    padding: "16px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    margin: "16px",
    width: "300px",
    height: "300px",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    opacity: 0.6,
  };

  const textStyle = {
    color: "white",
    padding: "16px",
    
  };

  return (
    <motion.div //애니메이션
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
    <div style={containerStyle}>
      <div style={cardStyle}>
        <audio controls>
          <source src={mp3} type="audio/mp3" />
        </audio>
      </div>
      <div style={textStyle}>
        <p>
          <strong>노래 제목 :</strong> {title}
        </p>
        <p>
          <strong>가수 :</strong> {singer}
        </p>
      </div>
    </div>
    </motion.div>
  );
};

export default Song;