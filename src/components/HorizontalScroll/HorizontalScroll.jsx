import React from "react";
import "./horizontalScrol.css";

const HorizontalScrollSection = ({ children }) => {
  return (
    <div className="horizontal-scroll-section">
      <div className="horizontal-scroll-section-content">
      <div className='scrollCard'>Item 1</div>
        <div className='scrollCard'>Item 1</div>
        <div className='scrollCard'>Item 1</div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;

