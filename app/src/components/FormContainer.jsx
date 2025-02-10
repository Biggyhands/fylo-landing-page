import React, { useState } from "react";

export const FormContainer = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  return (
    <section className="form-container">
      <section className="form-card">
        <h1>Get early access today</h1>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            <input
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Get Started For Free</button>
          </label>
          <span className={validEmail ? "hidden" : "error"}>
            Please enter a valid email address
          </span>
        </form>
      </section>
    </section>
  );
};
