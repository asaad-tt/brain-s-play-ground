import React, { useContext } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { QuizContext } from "../../Layout/Main";

const Statistics = () => {
  const quizzes = useContext(QuizContext);
  // console.log(quizzes);
  return (
    <div className="flex sm:w-100 justify-center mt-10">
      <LineChart
        width={500}
        height={400}
        data={quizzes.quizzes.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Line type="monotone" dataKey="total" stroke="#82ca9d"></Line>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip></Tooltip>
        <CartesianGrid strokeDasharray="3 3" />
      </LineChart>
    </div>
  );
};

export default Statistics;
