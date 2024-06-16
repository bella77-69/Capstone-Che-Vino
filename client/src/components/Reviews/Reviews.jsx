import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Title from '../Title/Title';
import '../../components/Reviews/reviews.scss';

const Reviews = () => {
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/wines/review/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setServices(result);
        console.log(result);
      });
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:8080/wines/comments/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setReviews(result);
        console.log(result);
      });
  }, [id]);

  return (
    <section className="wine-section text-white">
      <div className="container py-5">
        <div className="col-lg-7 mx-auto ">
          <Title title="Wine Reviews" />
        </div>

        <div className="media align-items-lg-center flex-column flex-lg-row p-3">
          {services.map((service) => (
            <div
              className="media-body order-2 order-lg-1 d-flex flex-column align-items-center"
              key={service.id}
            >
              <h5 className="mt-0 font-weight-bold mb-2 ">{service.wine}</h5>
              <img
                src={service.image}
                alt="wine-pic"
                width="150"
                className="mt-3"
              />
              <h5 className="card-subtitle mt-3">{service.style}</h5>
              <h5 className="card-subtitle  mt-2">{service.price}</h5>
              <p className="card-text p-y-1 mt-2">Rating: {service.rating}</p>
              <h5 className="card-subtitle mx-3 mt-2">{service.review}</h5>
              <div className="d-flex justify-content-center mt-4">
                <span className="font-weight-bold">Reviews</span>
              </div>

              {/* Uncomment and update the following block if you have review data to display */}
              {/* {reviews.map((review) => (
                <article className="container py-4" key={review.id}>
                  <div className="img-container">
                    <img src="" alt="" id="img" />
                    <i className="fas fa-quote-right"></i>
                  </div>
                  <p id="author">{review.name}</p>
                  <p id="job">{review.date}</p>
                  <p id="info">{review.comments}</p>
                </article>
              ))} */}

              <button className="btn mx-2">
                <Link to={`/leave_review/${service.id}`} className="list-link">
                  Leave a Review
                </Link>
              </button>
              <button className="btn mx-2">
                <Link to="/">Back to Homepage</Link>
              </button>
              <button className="btn">
                <Link to="/reviews">Back to Wine Page</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
