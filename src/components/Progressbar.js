import { Link } from "react-router-dom";
import React from "react";

const Progressbar = ({ prev, next, progress, submit }) => {
    return (
        <div className="progressBar">
            <div className="backButton">
                <span className="material-icons-outlined" onClick={prev}>
                    arrow_back{" "}
                </span>
            </div>
            <div className="rangeArea">
                <div className="tooltip">{progress}% Cimplete!</div>
                <div className="rangeBody">
                    <div className="progress" style={{ width: `${progress}%` }} />
                </div>
            </div>

            <button className="button next" onClick={progress === 100 ? submit : next}>
                <span>{progress === 100 ? "submit" : "Next Question"} </span>
                <span className="material-icons-outlined"> arrow_forward </span>
            </button>
        </div>
    );
};

export default Progressbar;
