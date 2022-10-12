import React from "react";
import { Link } from "react-router-dom";
import "./Quizzes.css";

const Quizzes = ({ quiz }) => {
  const { id, name, logo, total } = quiz;
  return (
    <div className="card w-80  bg-red-100 shadow-xl">
      <figure>
        <img className="img_card" src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="font-semibold">Number of Quizzes: {total}</p>
        <div className="card-actions justify-end">
          <Link to={`/home/${id}`}>
            <button className="btn btn-primary">Start Quiz</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Quizzes;
