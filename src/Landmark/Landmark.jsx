import React from "react";
import { motion } from "framer-motion";

function Landmark(props) {
    const { title, backgroundImage, children } = props;

    const containerStyle = {
        margin: "8px",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "290px",
        height: "400px",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "box-shadow 0.3s ease-in-out",
    };

    const contentStyle = {
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0",
        padding: "20px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "#fff",
        transition: "background-color 0.3s ease-in-out",
    };

    return (
        <motion.div //애니메이션
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
        <div
            style={containerStyle}
        >
            <div style={contentStyle}>
                {title && <h2 style={{ margin: "0", fontSize: "1.5rem" }}>{title}</h2>}
                {children}
            </div>
        </div>
        </motion.div>
    );
}

export default Landmark;

