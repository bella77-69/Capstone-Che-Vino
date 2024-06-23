import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './reviewPage.scss';

const ReviewPage = () => {
  const [currentItemsId, setCurrentItemsId] = useState('');
  const [currentItem, setCurrentItem] = useState({});
  const [items, setItems] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:8080/wines/review')
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const itemId = id || (items.length > 0 ? items[0].id : '');
    if (itemId && itemId !== currentItemsId) {
      axios
        .get(`http://localhost:8080/wines/review/${itemId}`)
        .then((res) => {
          setCurrentItemsId(res.data[0]);
          setCurrentItem(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [id, items, currentItemsId]);

  const handleSubmit = (itemId, e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:8080/wines/review/${itemId}`)
      .then((res) => {
        setCurrentItemsId(res.data[0]);
        navigate(`/reviews/${itemId}`);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section className="review-page">
      <header className="review-page__header">
        <h1 className="review-page__title">Wine Reviews</h1>
        <div className="review-page__divider"></div>
      </header>
      <div className="review-page__content container">
        {items.map((item, index) => (
          <div className="review-page__card card" key={index}>
            <img className="review-page__image" src={item.image} alt="wine-img" />
            <div className="review-page__info">
              <h4 className="review-page__wine">{item.wine}</h4>
              <div className="review-page__divider"></div>
              <h5 className="review-page__style">Style: {item.style}</h5>
              <h5 className="review-page__price">Price: {item.price}</h5>
              <h5 className="review-page__rating">Rating: {item.rating}</h5>
              <div className="review-page__divider"></div>
              <h5 className="review-page__review">Review:</h5>
              <p className="review-page__reviews"> {item.review}</p>
          
            </div>
            <button className="review-page__button btn" onClick={(e) => handleSubmit(item.id, e)}>
              <Link to={`/reviews/${item.id}`} className="review-page__link">
                More Info
              </Link>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewPage;
