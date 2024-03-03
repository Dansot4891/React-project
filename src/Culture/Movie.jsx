import React, { useState } from "react";
import { motion } from "framer-motion";
import './Movie.css';

const Movie = ({ intro, children, backgroundImage }) => {
    const [isHovered, setIsHovered] = useState(false);

    const NoAction = {
        margin: "16px",
        padding: "16px",
        height: "750px",
        width: "265px",
        borderRadius: "8px",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        transition: "box-shadow 0.3s ease",
        cursor: "pointer",
        opacity: 1,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        transform: "scale(1.05)",
    };
    const Action = {
        margin: "16px",
        padding: "16px",
        height: "750px",
        width: "265px",
        borderRadius: "8px",
        backgroundColor: "black",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        transition: "box-shadow 0.3s ease",
        cursor: "pointer",
        color: "white",
        opacity: 0.5
    };


    return (
        <motion.div //애니메이션
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
            <div
                style={isHovered ? Action : NoAction}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {children}
                <p>{isHovered && intro}</p>
            </div>
        </motion.div>
    );
};

export default Movie;