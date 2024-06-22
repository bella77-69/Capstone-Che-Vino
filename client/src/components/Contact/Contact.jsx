import React, { useState, useEffect } from "react";
import "./contact.scss";
import axios from "axios";
import Title from "../Title/Title";

export default function Contact() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/wines/contact").then((response) => {
      console.log(response);
      setComments(response.data);
    });
  }, []);

  return (
    <div className="wine-section">
      <div className="container">
      <header className="review-page__header">
        <h1 className="review-page__title">Recent Comments</h1>
        <div className="review-page__divider"></div>
      </header>
     
      </div>
      <div className="media align-items-lg-center flex-column" key={comments.id}>
        {comments.map((comment, index) => (
          <div key={index}>
            <h4 className="contact-name pb-2">
              {comment.name}
            </h4>
            <p className="contact-review contact-input">{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
