"use client";
import React from "react";
import { DotLottiePlayer, Controls } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

export const Lottie = ({
  src,
}: {
  src: string;
}) => {

  return (
    <DotLottiePlayer
      autoplay
      loop
      src={src}
    />
  );
};