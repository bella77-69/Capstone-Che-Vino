// import axios from 'axios';
// import React, { useState } from 'react';
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
//     <div className="leave-review">
//       <div className="leave-review__container">
//         <div className="leave-review__text-center">
//         <header className="wines-section-header">
//           <h1 className="wines-section-title">Leave a Review</h1>
//           <p className="wines-section-text">
//           For Inquiries, Support Requests or General Questions
//           </p>
//         </header>    
//         </div>

//         <div className="leave-review__row">
//           <div className="leave-review__col-lg-7 leave-review__mx-auto">
//             <div className="leave-review__card leave-review__mx-auto leave-review__p-4 leave-review__bg-light">
//               <div className="leave-review__card-body leave-review__bg-light">
//                 <div className="leave-review__container">
//                   <form id="leave-review__contact-form" onSubmit={handleSubmit}>
//                     <div className="leave-review__controls">
//                       <div className="leave-review__row">
//                         <div className="leave-review__col-md-6">
//                           <div className="leave-review__form-group">
//                             <label htmlFor="leave-review__form_name">Name *</label>
//                             <input
//                               id="name"
//                               type="text"
//                               name="name"
//                               className="leave-review__form-control"
//                               placeholder="Please enter your name *"
//                               required="required"
//                               data-error="Name is required."
//                               value={contact.name}
//                               onChange={handleChange}
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="leave-review__row">
//                         <div className="leave-review__col-md-6">
//                           <div className="leave-review__form-group">
//                             <label htmlFor="leave-review__form_email">Email *</label>
//                             <input
//                               id="email"
//                               type="email"
//                               className="leave-review__form-control"
//                               placeholder="Please enter your email *"
//                               required="required"
//                               data-error="Valid email is required."
//                               value={contact.email}
//                               onChange={handleChange}
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="leave-review__row">
//                         <div className="leave-review__col-md-12">
//                           <div className="leave-review__form-group">
//                             <label htmlFor="leave-review__form_message">Message *</label>
//                             <textarea
//                               id="comment"
//                               name="comment"
//                               className="leave-review__form-control"
//                               placeholder="Write your message here."
//                               rows="4"
//                               required="required"
//                               data-error="Please, leave us a message."
//                               value={contact.comment}
//                               onChange={handleChange}
//                             ></textarea>
//                           </div>
//                         </div>

//                         <div className="leave-review__col-md-12">
//                           <input
//                             type="submit"
//                             className="leave-review__btn leave-review__btn-success leave-review__btn-send leave-review__pt-2 leave-review__btn-block"
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
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './leaveReview.scss';

const LeaveComment = () => {
    const { id } = useParams();
    const [commentData, setCommentData] = useState({
        comment_text: '',
        comment_name: '',
        comment_date: new Date().toISOString().split('T')[0] 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCommentData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { ...commentData, review_id: id };

        fetch('http://localhost:8080/wines/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log('Comment Created:', result);
            window.location.href = `/reviews/${id}`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
          <div className="leave-review">
      <div className="leave-review__container">
        <div className="leave-review__text-center">
        <header className="wines-section-header">
          <h1 className="wines-section-title">Leave a Review</h1>
    
        </header>    
        </div>
  

        <div className="leave-review__row">
           <div className="leave-review__col-lg-7 leave-review__mx-auto">
             <div className="leave-review__card leave-review__mx-auto leave-review__p-4 leave-review__bg-light">
               <div className="leave-review__card-body leave-review__bg-light">
                 <div className="leave-review__container">
                 <form onSubmit={handleSubmit}>
            <textarea 
                name="comment_text" 
                placeholder="Comment Text" 
                value={commentData.comment_text} 
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="comment_name" 
                placeholder="Your Name" 
                value={commentData.comment_name} 
                onChange={handleChange} 
            />
            <button type="submit">Submit Comment</button>
        </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
    );
};

export default LeaveComment;

