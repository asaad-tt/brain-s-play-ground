import React, { useContext } from "react";
import { QuizContext } from "../../Layout/Main";
import Quizzes from "../Quizzes/Quizzes";

const Topic = () => {
  const quizzes = useContext(QuizContext);
  // console.log(quizzes.quizzes.data);

  return (
    <div className="bg-lime-200">
      <h2 className="text-2xl pt-5 text-center  text-purple-500">
        Choose your Topic
      </h2>
      <div className="grid lg:grid-cols-2 gap-y-5 justify-center mx-auto pl-32 py-20">
        {quizzes.quizzes.data.map((quiz) => (
          <Quizzes key={quiz.id} quiz={quiz}></Quizzes>
        ))}
      </div>
    </div>
  );
};

export default Topic;
