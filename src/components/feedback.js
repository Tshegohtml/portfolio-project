import React, { useState } from 'react';
import "./feedback.css";

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
 
    setSubmitted(true);
  };

  return (
    <div className="feedback-container">
      <h1>Feedback Form</h1>
      <p>We value your feedback! Please let us know what you think.</p>

      {submitted ? (
        <div className="thank-you">
          <h2>Thank You!</h2>
          <p>Your feedback has been submitted successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your feedback here"
              rows="5"
              required
            />
          </div>

          <button type="submit" className="btn-submit">Submit Feedback</button>
        </form>
      )}
    </div>
  );
};

export default Feedback;
