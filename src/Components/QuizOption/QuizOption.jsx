import React from "react";

const QuizOption = ({ option, handleQuestion }) => {
  return (
    <div className="flex items-center ju border-2 border-indigo-600 p-5">
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
