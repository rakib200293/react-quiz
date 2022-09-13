import React from "react";
import image from "../assets/images/3.jpg";

const Miniplayer = () => {
    return (
        <div className="miniPlayer floatingBtn">
            <span className="material-icons-outlined open"> play_circle_filled </span>
            <span className="material-icons-outlined close"> close </span>
            <img src={image} alt="image" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
    );
};

export default Miniplayer;