import React from "react";
import Lottie from "react-lottie";
import * as sucess from "../Preloader/1127-success";


const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: sucess.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Preloader2() {
  return (
    <div style={{backgroundColor:"#888"}}>
      <Lottie options={defaultOptions2} height={200} width={200} />
    </div>
  );
}

export default Preloader2;
