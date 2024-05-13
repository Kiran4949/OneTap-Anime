import React from "react";
import { useParams } from "react-router-dom";
import AnimeDetails from "../Api/AnimeDetails/AnimeDetails";
import EstimatedSchedules from "../Categories/EstimatedSchedules/EstimatedSchedules";

const Data = () => {
  const { id } = useParams();

  return (
    <>
      <AnimeDetails id={id} />
      <EstimatedSchedules />
    </>
  );
};

export default Data;
