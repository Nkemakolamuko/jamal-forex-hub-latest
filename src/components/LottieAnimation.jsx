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

  return <Lottie options={defaultOptions} height={400} width={400} />;
};

export default LottieAnimation;
