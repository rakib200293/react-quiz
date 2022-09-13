import React from "react";
import success from "../assets/images/success.png";

const Summary = () => {
    return (
        <>
            <div className="summary">
                <div className="point">
                    <p className="score">
                        Your score is <br />5 out of 10
                    </p>
                </div>
                <div className="badge">
                    <img src={success} alt="Success" />
                </div>
            </div>
            ;
        </>
    );
};

export default Summary;
