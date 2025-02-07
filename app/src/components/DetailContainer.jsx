import React from "react";
import arrowIcon from "../assets/icon-arrow.svg";
import illustrationProductive from "../assets/illustration-stay-productive.png";

export const DetailContainer = () => {
  return (
    <section className="detail-container">
      <img className="detai-illustration" src={illustrationProductive} alt="" />
      <div className="detail-card">
        <h1>Stay productive, wherever you are</h1>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>

        <a className="detail-link" href="/">
          See how Fylo works
          <img className="a-image" src={arrowIcon} alt="arrow icon" />
        </a>
      </div>
    </section>
  );
};
