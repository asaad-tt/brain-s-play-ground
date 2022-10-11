import React, { createContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const QuizContext = createContext({});

const Main = () => {
  return (
    <QuizContext.Provider>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </QuizContext.Provider>
  );
};

export default Main;
