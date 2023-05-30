import React from 'react';
import './loading.css';
const Loading = () => {
  return (
    <div>
      {/* <div class="ring">
        Loading
        <span></span>
      </div> */}
      <div className="container">
        <div className="loader">
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--text"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
