import React from 'react';
import { motion } from "framer-motion";

const HolidayDetail = ({ holiday }) => {
  return (
    <div className="holiday-detail">
      <motion.div //애니메이션
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
      <div className='Hdes'>
        <h2>{holiday.name}</h2>
        <p className='des'>{holiday.description}</p>
        <p className='culture'>풍습</p>
        <p className='des'>{holiday.culture}</p>
        <div className='image-container'>
        <img src={holiday.src1} className="holiday-image" />
        <img src={holiday.src2} className="holiday-image" />
        <img src={holiday.src3} className="holiday-image" />
        </div>
        </div>
        </motion.div>
    </div>
    
  );
};

export default HolidayDetail;