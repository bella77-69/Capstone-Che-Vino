import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Title from '../../components/Title/Title';
import '../../components/Reviews/reviews.scss';


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
    <section className="wine-section">
      
      <div className="d-flex justify-content-center container">
      <header className="wines-section-header">
          <h1 className="wines-section-title">Wine Reviews</h1>
      <div className="wines-divider"></div>

        </header> 
        <div className="card p-3 text-white">
          <div className="about-product">
            {items.map((item, index) => (
              <div className="mt-0 mt-4" key={index}>
                <img className="pl-3" src={item.image} width="100" alt="wine-img" />
                <h4 className="card-title mt-4 mx-3">{item.wine}</h4>
                <h5 className="card-subtitle mx-3 mt-2">{item.style}</h5>
                <h5 className="card-subtitle mx-3 mt-2">{item.price}</h5>
                <h5 className="card-subtitle mx-3 mt-2">{item.review}</h5>
                <p className="card-text p-y-1 mx-3 mt-2">Rating: {item.rating}</p>
                <button className="btn mx-3 mt-2 border-dark" onClick={(e) => handleSubmit(item.id, e)}>
                  <Link to={`/reviews/${item.id}`} className="card-link">
                    More Info
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewPage;
