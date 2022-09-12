import React from 'react';
import "../styles/videos.css";
import thambnail from "../assets/images/3.jpg"

const Video = () => {
    return (
        <>
        <a href="quiz.html">
          <div className="video">
            <img src={thambnail} alt />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
            <div className="qmeta">
              <p>10 Questions</p>
              <p>Score : Not taken yet</p>
            </div>
          </div>
        </a>

        </>
    );
};

export default Video;