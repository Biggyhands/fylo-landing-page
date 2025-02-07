import React from "react";
import featuresData from "../helpers/featuresData";

export const FeaturesContainer = () => {
  return (
    <section>
      {featuresData.map((feature) => (
        <div>
          <img src={feature.icon} key={feature.id} alt={feature.title} />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};
