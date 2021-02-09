import React from "react";
import { useParams } from "react-router-dom";

const PagesPromotionEdit = () => {
  const { id } = useParams();

  return <div>{id && <div>id:{id}</div>}</div>;
};

export default PagesPromotionEdit;
