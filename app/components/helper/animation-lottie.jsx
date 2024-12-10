"use client"
import { useEffect, useState } from "react";

const AnimationLottie = () => {
  const [Lottie, setLottie] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("lottie-web").then((lottie) => {
        setLottie(lottie);
      });
    }
  }, []);

  useEffect(() => {
    if (Lottie) {
      const animationContainer = document.getElementById("animation-container");
      Lottie.loadAnimation({
        container: animationContainer,
        renderer: "svg",
        loop: true,
        autoplay: true
      });
    }
  }, [Lottie]);

  return <div id="animation-container">Animação</div>;
};

export default AnimationLottie;
