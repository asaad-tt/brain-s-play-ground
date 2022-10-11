import React, { useContext } from "react";
import { QuizContext } from "../../Layout/Main";
import Header from "../Header/Header";
import Quizzes from "../Quizzes/Quizzes";

const Home = () => {
  const quizzes = useContext(QuizContext);
  // console.log(quizzes.quizzes.data);

  return (
    <div className="bg-lime-200">
      <Header></Header>
      <div className="grid lg:grid-cols-2 gap-y-5 justify-center mx-auto pl-32 py-20">
        {quizzes.quizzes.data.map((quiz) => (
          <Quizzes key={quiz.id} quiz={quiz}></Quizzes>
        ))}
      </div>
    </div>
  );
};

export default Home;
