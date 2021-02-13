import React from "react";
import { useParams } from "react-router-dom";
import PromotionForm from "components/Promotion/Form/Form";

const PagesPromotionEdit = () => {
  // const params = useParams("/edit/:id")
  // const { id } = params;
  const { id } = useParams();
  // return <div>{id && <div>id:{id}</div>}</div>;
  return (
    <div
      style={{
        maxWidth: 800,
        margin: "30px auto",
      }}
    >
      <PromotionForm id={id} />
    </div>
  );
};

export default PagesPromotionEdit;
