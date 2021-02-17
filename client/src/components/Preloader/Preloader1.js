import React from "react";
import ReactLoading from "react-loading";

function Preloader1() {
  return (
    <div
      style={{
        margin: "140px",
        justifyContent: "center",
        alignItems: "right",
      }}
    >
      <span>
        <ReactLoading 
        type={"bars"} 
        color={"#03fc4e"} 
        height={50} 
        width={50} />
      </span>
    </div>
  );
}

export default Preloader1;
