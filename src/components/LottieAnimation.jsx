import React from "react";
import Lottie from "react-lottie";
import animationData from "../animation/animation.bg.json";

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      className="md:w-[400px] md:h-[400px] w-[200px] h-[200px]"
    />
  );
};

export default LottieAnimation;
