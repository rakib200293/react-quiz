import React from "react";
import thambnail from "../assets/images/3.jpg";

const Video = () => {
    return (
        <>
            <div className="video">
                <img src={thambnail} alt="thambnail" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div className="qmeta">
                    <p>10 Questions</p>
                    <p>Score : Not taken yet</p>
                </div>
            </div>
        </>
    );
};

export default Video;
