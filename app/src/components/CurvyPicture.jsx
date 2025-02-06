import React, { useState, useEffect } from "react";

import CurvyPictureMobile from "../assets/bg-curvy-mobile.svg";
import CurvyPictureDesktop from "../assets/bg-curvy-desktop.svg";

export default function CurvyPicture() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <img
        className="curvy-background"
        src={isMobileView ? CurvyPictureMobile : CurvyPictureDesktop}
        alt="Curvy Background"
      />
    </>
  );
}
