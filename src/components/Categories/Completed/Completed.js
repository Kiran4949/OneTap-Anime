import React from "react";
import CategoryData from "../../Api/CategoryData/CategoryData";
import "./style.css";

const Completed = () => {
  return (
    <div className="completed-container">
      <h2>Completed Anime</h2>
      <CategoryData type="completed" />
    </div>
  );
};

export default Completed;
