import React from "react";
import { IllustrationIntroContainer } from "./IllustrationIntroContainer";
import { GetStartedContainer } from "./GetStartedContainer";
import { FeaturesContainer } from "./FeaturesContainer";
export default function MainContainer() {
  return (
    <main>
      <IllustrationIntroContainer />
      <GetStartedContainer />
      <FeaturesContainer />
    </main>
  );
}
