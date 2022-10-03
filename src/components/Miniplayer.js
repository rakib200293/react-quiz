import React, { useState } from "react";
import { useRef } from "react";
import image from "../assets/images/3.jpg";

const Miniplayer = () => {
    const buttonRef = useRef();
    const [status, setStatus] = useState(false);

    function toggleMiniplayer() {
        if (!status) {
            buttonRef.current.classList.remove("floatingBtn");
            setStatus(true);
        } else {
            buttonRef.current.classList.add("floatingBtn");
            setStatus(false);
        }
    }

    return (
        <div className="miniPlayer floatingBtn" onClick={toggleMiniplayer} ref={buttonRef}>
            <span className="material-icons-outlined open"> play_circle_filled </span>
            <span className="material-icons-outlined close" onClick={toggleMiniplayer}>
                {" "}
                close{" "}
            </span>
            <img src={image} alt="imags" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
    );
};

export default Miniplayer;
