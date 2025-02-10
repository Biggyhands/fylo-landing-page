import React from "react";
import testimonyData from "../helpers/testimonyData";
import quote from "../assets/bg-quotes.png";

export default function TestimonyContainer() {
  return (
    <section className="testimony-container">
      <img className="testominy-quote" src={quote} alt="Quote icon" />
      {testimonyData.map((testimony) => (
        <div className="testimony-card" key={testimony.id}>
          <p className="testimony-description ">{testimony.description}</p>
          <div className="testimony-profile">
            <img src={testimony.icon} alt={`${testimony.name} profile`} />
            <div className="testimony-profile-info">
              <p className="testimony-name">{testimony.name}</p>
              <p className="testimony-title">{testimony.title}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
