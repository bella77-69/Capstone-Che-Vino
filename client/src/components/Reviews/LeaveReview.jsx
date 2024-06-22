// import axios from 'axios';
// import React, { useState } from 'react';
// import Title from '../Title/Title';
// import './leaveReview.scss';

// export default function LeaveReview() {
//   const [contact, setContact] = useState({
//     id: '',
//     name: '',
//     email: '',
//     comment: '',
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setContact((prevState) => ({
//       ...prevState,
//       [id]: value,
//     }));
//   };

//   const handleSubmit = (e, id) => {
//     e.preventDefault();
//     const data = {
//       name: contact.name,
//       email: contact.email,
//       comment: contact.comment,
//     };

//     axios
//       .put(`http://localhost:8080/wines/reviews/${id}`, data)
//       .then((response) => {
//         if (response.status === 200) {
//           setContact((prevState) => ({
//             ...prevState,
//             successMessage: 'Submitted.',
//           }));
//           console.log(response);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="wine">
//       <div className="container">
//         <div className="text-center">
//           <Title title="Leave a Review"></Title>
//           <p className="form-subtitle">
//             For Inquiries, Support Requests or General Questions
//           </p>
//         </div>

//         <div className="row">
//           <div className="col-lg-7 mx-auto">
//             <div className="card mx-auto p-4 bg-light">
//               <div className="card-body bg-light">
//                 <div className="container">
//                   <form id="contact-form" onSubmit={handleSubmit}>
//                     <div className="controls">
//                       <div className="row">
//                         <div className="col-md-6">
//                           <div className="form-group">
//                             <label htmlFor="form_name">Name *</label>
//                             <input
//                               id="name"
//                               type="text"
//                               name="name"
//                               className="form-control"
//                               placeholder="Please enter your name *"
//                               required="required"
//                               data-error="Name is required."
//                               value={contact.name}
//                               onChange={handleChange}
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="row">
//                         <div className="col-md-6">
//                           <div className="form-group">
//                             <label htmlFor="form_email">Email *</label>
//                             <input
//                               id="email"
//                               type="email"
//                               className="form-control"
//                               placeholder="Please enter your email *"
//                               required="required"
//                               data-error="Valid email is required."
//                               value={contact.email}
//                               onChange={handleChange}
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="row">
//                         <div className="col-md-12">
//                           <div className="form-group">
//                             <label htmlFor="form_message">Message *</label>
//                             <textarea
//                               id="comment"
//                               name="comment"
//                               className="form-control"
//                               placeholder="Write your message here."
//                               rows="4"
//                               required="required"
//                               data-error="Please, leave us a message."
//                               value={contact.comment}
//                               onChange={handleChange}
//                             ></textarea>
//                           </div>
//                         </div>

//                         <div className="col-md-12">
//                           <input
//                             type="submit"
//                             className="btn btn-success btn-send pt-2 btn-block"
//                             value="Send Message"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import axios from 'axios';
import React, { useState } from 'react';
import Title from '../Title/Title';
import './leaveReview.scss';

export default function LeaveReview() {
  const [contact, setContact] = useState({
    id: '',
    name: '',
    email: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setContact((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();
    const data = {
      name: contact.name,
      email: contact.email,
      comment: contact.comment,
    };

    axios
      .put(`http://localhost:8080/wines/reviews/${id}`, data)
      .then((response) => {
        if (response.status === 200) {
          setContact((prevState) => ({
            ...prevState,
            successMessage: 'Submitted.',
          }));
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="leave-review">
      <div className="leave-review__container">
        <div className="leave-review__text-center">
        <header className="wines-section-header">
          <h1 className="wines-section-title">Leave a Review</h1>
          <p className="wines-section-text">
          For Inquiries, Support Requests or General Questions
          </p>
        </header>    
        </div>

        <div className="leave-review__row">
          <div className="leave-review__col-lg-7 leave-review__mx-auto">
            <div className="leave-review__card leave-review__mx-auto leave-review__p-4 leave-review__bg-light">
              <div className="leave-review__card-body leave-review__bg-light">
                <div className="leave-review__container">
                  <form id="leave-review__contact-form" onSubmit={handleSubmit}>
                    <div className="leave-review__controls">
                      <div className="leave-review__row">
                        <div className="leave-review__col-md-6">
                          <div className="leave-review__form-group">
                            <label htmlFor="leave-review__form_name">Name *</label>
                            <input
                              id="name"
                              type="text"
                              name="name"
                              className="leave-review__form-control"
                              placeholder="Please enter your name *"
                              required="required"
                              data-error="Name is required."
                              value={contact.name}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="leave-review__row">
                        <div className="leave-review__col-md-6">
                          <div className="leave-review__form-group">
                            <label htmlFor="leave-review__form_email">Email *</label>
                            <input
                              id="email"
                              type="email"
                              className="leave-review__form-control"
                              placeholder="Please enter your email *"
                              required="required"
                              data-error="Valid email is required."
                              value={contact.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="leave-review__row">
                        <div className="leave-review__col-md-12">
                          <div className="leave-review__form-group">
                            <label htmlFor="leave-review__form_message">Message *</label>
                            <textarea
                              id="comment"
                              name="comment"
                              className="leave-review__form-control"
                              placeholder="Write your message here."
                              rows="4"
                              required="required"
                              data-error="Please, leave us a message."
                              value={contact.comment}
                              onChange={handleChange}
                            ></textarea>
                          </div>
                        </div>

                        <div className="leave-review__col-md-12">
                          <input
                            type="submit"
                            className="leave-review__btn leave-review__btn-success leave-review__btn-send leave-review__pt-2 leave-review__btn-block"
                            value="Send Message"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
