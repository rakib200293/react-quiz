import React from "react";
import success from "../assets/images/success.png";

const Summary = ({ score, noq }) => {
    return (
        <>
            <div className="summary">
                <div className="point">
                    <p className="score">
                        Your score is <br />
                        {score} out of {noq * 5}
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
