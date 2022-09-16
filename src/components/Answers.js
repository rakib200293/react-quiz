import React, { Fragment } from "react";
import Checkbox from "./Checkbox";

const Answers = ({ options = [], handleChange, input }) => {
    return (
        <div className="answers">
            {options.map((option, index) => (
                <Fragment key={index}>
                    {input ? (
                        <Checkbox
                            key={index}
                            className="answer"
                            text={option.title}
                            value={index}
                            checked={option.checked}
                            onChange={(e) => handleChange(e, index)}
                        />
                    ) : (
                        <Checkbox
                            key={index}
                            className={`answer ${
                                option.correct ? "correct" : option.checked ? "wrong" : null
                            }`}
                            text={option.title}
                            value={index}
                            defaultChecked={option.checked}
                            disabled
                        />
                    )}
                </Fragment>
            ))}
        </div>
    );
};

export default Answers;
