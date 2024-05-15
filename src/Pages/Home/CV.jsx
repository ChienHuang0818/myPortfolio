import React from 'react';
import '../../App.css'; 

const CV = () => {
  return (
    <div className="cv-container">
      <iframe 
        src="/img/cv.pdf"  // 確保路徑正確
        title="CV"
        className="cv-iframe"
        style={{ width: '100%', height: '100vh', border: 'none' }}
      />
    </div>
  );
};

export default CV;



