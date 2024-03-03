import React from "react";
import { motion } from "framer-motion";

function LandmarkDetail(props) {
    const { title, children } = props;

    return (
        <motion.div //애니메이션
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
        <div
            style={{
                margin: 16,
                padding: 8,
                borderRadius: 8,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
                width: "290px",
                height: "360px",
                color: "white",
                borderColor:"white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
            }}
        >
            {title && <h1 style={{ fontSize: "1.5rem" }}>{title}</h1>}
            {children}
        </div>
        </motion.div>
    );
}

export default LandmarkDetail;