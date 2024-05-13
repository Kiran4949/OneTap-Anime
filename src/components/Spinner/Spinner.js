import React from "react";
import { FadeLoader } from "react-spinners";
import "./style.css";

const Spinner = ({ loading }) => {
  return (
    <div className="spinner-container">
      <FadeLoader color="#36d7b7" loading={loading} />
    </div>
  );
};

export default Spinner;
