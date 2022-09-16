import React from "react";
import Checkbox from "./Checkbox";

const Answers = ({ options = [], handleChange }) => {
    return (
        <div className="answers">
            {options.map((option, index) => (
                <Checkbox
                    key={index}
                    className="answer"
                    text={option.title}
                    value={index}
                    checked={option.checked}
                    onChange={(e) => handleChange(e, index)}
                ></Checkbox>
            ))}
        </div>
    );
};

export default Answers;
