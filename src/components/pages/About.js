import React from "react";
import svg from "../../assest/img/undraw_random_thoughts_xejj.svg"

export default () => {
  return (
    <div>
      <h1 className="display-4">About Contact Manager</h1>
      <p className="lead">Simple app to manage contacts</p>
      <div>
          <img src={svg} style={{ width: "400px", margin: "auto", display: "block" }}  alt="about us image "/>
      </div>
    </div>
  );
};
