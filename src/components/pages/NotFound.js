import React from "react";
import svg from "../../assest/img/undraw_questions_75e0.svg";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <h1 className="display-4">
        <span className="text-danger">404</span> Page Not Found
      </h1>
      <p className="lead">Sorry, that page does not exist</p>
      <p className="lead">
        Go back <Link to="./">Home page </Link>
      </p>
      <div>
        <img
          src={svg}
          style={{ width: "400px", margin: "auto", display: "block" }}
          alt="page not found "
        />
      </div>
    </div>
  );
};
