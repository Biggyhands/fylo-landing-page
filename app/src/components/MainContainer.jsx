import React from "react";
import { IllustrationIntroContainer } from "./IllustrationIntroContainer";
import { GetStartedContainer } from "./GetStartedContainer";
import { FeaturesContainer } from "./FeaturesContainer";
import { DetailContainer } from "./DetailContainer";
import TestimonyContainer from "./TestimonyContainer";
import { FormContainer } from "./FormContainer";

export default function MainContainer() {
  return (
    <>
      <IllustrationIntroContainer />
      <GetStartedContainer />
      <FeaturesContainer />
      <DetailContainer />
      <TestimonyContainer />
      <FormContainer />
    </>
  );
}
