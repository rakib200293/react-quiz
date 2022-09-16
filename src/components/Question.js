import React from "react";
import Answers from "./Answers";

const Question = ({ answers = [] }) => {
    return answers.map((answer, index) => (
        <div className="question" key={index}>
            <div className="qtitle">
                <span className="material-icons-outlined"> help_outline </span>
                Here goes the question from Learn with Sumit?
            </div>
            <Answers input={false} options={answer.options} />
        </div>
    ));
};

export default Question;
