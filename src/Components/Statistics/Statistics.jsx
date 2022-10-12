import React, { useContext } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { QuizContext } from "../../Layout/Main";

const Statistics = () => {
  const quizzes = useContext(QuizContext);
  // console.log(quizzes);
  return (
    <div>
      <h1 className="text-center pt-5  text-2xl text-purple-500">
        Graph of Quizzes{" "}
      </h1>
      <div className="flex sm:w-100 justify-center my-5">
        <ResponsiveContainer height={500}>
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
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
