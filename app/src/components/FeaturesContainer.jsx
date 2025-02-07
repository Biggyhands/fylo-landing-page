import React from "react";
import featuresData from "../helpers/featuresData";

export const FeaturesContainer = () => {
  return (
    <section className="features-container">
      {featuresData.map((feature) => (
        <div className="features-card">
          <img src={feature.icon} key={feature.id} alt={feature.title} />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};
