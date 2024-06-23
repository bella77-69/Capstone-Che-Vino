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

