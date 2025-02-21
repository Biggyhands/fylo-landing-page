import React from "react";
import CurvyPicture from "./CurvyPicture";

export const GetStartedContainer = () => {
  return (
    <section className="get-started-container">
      <h1>All your files in one secure location, accessible anywhere.</h1>
      <p>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends, family, and
        co-workers.
      </p>
      <button>Get Started</button>
      <CurvyPicture />
    </section>
  );
};
