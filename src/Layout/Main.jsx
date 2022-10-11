import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

export const QuizContext = createContext({});

const Main = () => {
  const quizzes = useLoaderData();
  // console.log(quizzes);

  return (
    <QuizContext.Provider value={{ quizzes }}>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </QuizContext.Provider>
  );
};

export default Main;
