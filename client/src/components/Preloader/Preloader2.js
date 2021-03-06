import React from "react";
import Lottie from "react-lottie";
import * as location from "../Preloader/1055-world-locations";

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: location.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};


function Preloader2() {
  return (
    <div style={{backgroundColor:"#888"}}>
      <Lottie options={defaultOptions1} height={200} width={200} />
    </div>
  );
}

export default Preloader2;
