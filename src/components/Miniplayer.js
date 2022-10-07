import React, { useState } from "react";
import { useRef } from "react";
import ReactPlayer from "react-player";

const Miniplayer = ({ title, id }) => {
    const buttonRef = useRef();
    const [status, setStatus] = useState(false);
    const videoUrl = `https://www.youtube.com/watch?v=${id}`;

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
            <ReactPlayer
                className="player"
                url={videoUrl}
                width="300px"
                height="168px"
                playing={status}
                controls
            />
            <p>{title}</p>
        </div>
    );
};

export default Miniplayer;
