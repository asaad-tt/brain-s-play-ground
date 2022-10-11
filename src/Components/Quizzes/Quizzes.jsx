import React from "react";
import { Link } from "react-router-dom";

const Quizzes = ({ quiz }) => {
  const { id, name, logo, total } = quiz;
  return (
    <div className="card w-96 bg-red-100 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Number of Quizzes: {total}</p>
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
