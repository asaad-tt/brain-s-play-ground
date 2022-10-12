import React from "react";
import "./QuizOption.css";

const QuizOption = ({ option, handleQuestion }) => {
  return (
    <div className="quiz_option flex items-center rounded border-2 border-indigo-600 p-5">
      <button onClick={() => handleQuestion(option)}>
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
        />
      </button>
      <h1 className="ml-2">{option}</h1>
    </div>
  );
};

export default QuizOption;
