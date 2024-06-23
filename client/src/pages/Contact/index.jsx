import axios from "axios";
import React, { useState } from "react";
import "./contactPage.scss";
import Contact from "../../components/Contact/Contact";

export default function ContactPage() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    comment: "",
    successMessage: null,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setContact((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: contact.name,
      email: contact.email,
      comment: contact.comment,
    };

    axios
      .post("http://localhost:8080/wines/contact/", data)
      .then((response) => {
        if (response.status === 200) {
          setContact((prevState) => ({
            ...prevState,
            successMessage: "Message submitted successfully.",
            name: "",
            email: "",
            comment: "",
          }));
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="wine-section">
      <div className="container">
        <div className="text-center">
        <header className="wines-section-header">
          <h1 className="wines-section-title">Contact Che Vino</h1>
          <p className="wines-section-text">
          For Inquiries, Support Requests or General Questions
          </p>
          <div className="wines-divider"></div>
        </header>  
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="card shadow bg-light rounded">
              <div className="card-body">
                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="name">Name *</label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Enter your name"
                          required
                          value={contact.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          placeholder="Enter your email"
                          required
                          value={contact.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="comment">Message *</label>
                        <textarea
                          id="comment"
                          name="comment"
                          className="form-control"
                          placeholder="Write your message here"
                          rows="4"
                          required
                          value={contact.comment}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
                {contact.successMessage && (
                  <div className="alert alert-success mt-3" role="alert">
                    {contact.successMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          {/* <Contact /> */}
        </div>
      </div>
    </section>
  );
}
