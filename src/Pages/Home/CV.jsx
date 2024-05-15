import React from 'react';
import '../../App.css'; 

const CV = () => {
  return (
    <div className="cv-container">
      <iframe 
        src="/img/CV.pdf"  // 確保這裡的路徑是正確的
        title="CV"
        className="cv-iframe"
        style={{ width: '100%', height: '100vh', border: 'none' }}
      />
    </div>
  );
};

export default CV;
