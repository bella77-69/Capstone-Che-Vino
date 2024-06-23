// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import '../../components/Reviews/reviews.scss';

// const Reviews = () => {
//   const [services, setServices] = useState([]);
//   const [reviews, setReviews] = useState([]);
//   const { id } = useParams();

//   useEffect(() => {
//     fetch(`http://localhost:8080/wines/review/${id}`)
//       .then((res) => res.json())
//       .then((result) => {
//         setServices(result);
//         console.log(result);
//       });
//   }, [id]);

//   useEffect(() => {
//     fetch(`http://localhost:8080/wines/comments/${id}`)
//       .then((res) => res.json())
//       .then((result) => {
//         setReviews(result);
//         console.log(result);
//       });
//   }, [id]);

//   return (
//     <section className="wine-section text-white">
//       <div className="container py-5">
//       <header className="wines-section-header">
//           <h1 className="wines-section-title">Wine Reviews</h1>
//           <p className="wines-section-text">
//             Read reviews from our customers and leave your own review.
//           </p>
          
//           <div className="wines-divider"></div>
//         </header>
  
//         <div className="media align-items-lg-center flex-column flex-lg-row p-3">
//           {services.map((service) => (
//             <div
//               className="media-body order-2 order-lg-1 d-flex flex-column align-items-center"
//               key={service.id}
//             >
//               <h5 className="mt-0 font-weight-bold mb-2 ">{service.wine}</h5>
//               <img
//                 src={service.image}
//                 alt="wine-pic"
//                 width="150"
//                 className="mt-3"
//               />
//               <h5 className="card-subtitle mt-3">{service.style}</h5>
//               <h5 className="card-subtitle  mt-2">{service.price}</h5>
//               <p className="card-text p-y-1 mt-2">Rating: {service.rating}</p>
//               <h5 className="card-subtitle mx-3 mt-2">{service.review}</h5>
//               <div className="d-flex justify-content-center mt-4">
//                 <span className="font-weight-bold">Reviews</span>
//               </div>

//               <button className="btn mx-2">
//                 <Link to={`/leave_review/${service.id}`} className="list-link">
//                   Leave a Review
//                 </Link>
//               </button>
//               <button className="btn mx-2">
//                 <Link to="/">Back to Homepage</Link>
//               </button>
//               <button className="btn">
//                 <Link to="/reviews">Back to Wine Page</Link>
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reviews;
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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
    <section className="wine-section">
      <div className="container">
        <header className="wines-section-header">
          <h1 className="wines-section-title">Wine Reviews</h1>
          <p className="wines-section-text">
            Read reviews from our customers and leave your own review.
          </p>
          <div className="wines-divider"></div>
        </header>
  
        <div className="media">
          {services.map((service) => (
            <div
              className="media-body"
              key={service.id}
            >
              <h5 className="mt-0 ">{service.wine}</h5>
              <img
                src={service.image}
                alt="wine-pic"
                width="150"
                className="mt-3"
              />
              <h5 className="card-subtitle mt-3">Style: {service.style}</h5>
              <h5 className="card-subtitle mt-2">Price: {service.price}</h5>
              <p className="card-text p-y-1 mt-2">Rating: {service.rating}</p>
              <span className="font-weight-bold">Reviews</span>
              <h5 className="card-review">{service.review}</h5>
        {reviews.map((review) => (
          <div className="card-reviews" key={review.id}>
             <div className="wines-divider"></div>
            <h4 className="card-reviews__name">
              {review.comment_name} -  <span>{review.comment_date}</span>
            </h4>
           
            <h5 className="card-reviews__review">{review.comment_text}</h5>
            <div className="wines-divider"></div>
          </div>
          
        ))}
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
