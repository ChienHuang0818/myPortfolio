import React from "react";
import "../../App.css";

const CV = () => {
  return (
    <div className="cv-container" style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <iframe
        src="/img/cv.pdf"
        title="CV"
        className="cv-iframe"
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
};

export default CV;
