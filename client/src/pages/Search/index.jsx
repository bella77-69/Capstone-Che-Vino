import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./search.scss";

export default function Search() {
  const [data, setData] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respWines = await axios.get("http://localhost:8080/wines/all");
        setData(respWines.data);
        setRepos(respWines.data);
      } catch (error) {
        console.error("Error fetching wines:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    const result = data.filter((wine) => wine.wine.toLowerCase().includes(value));
    setRepos(result);
  };

  return (
    <section className="wine-section">
      <div className="container">
      <header className="wines-section-header">
          <h1 className="wines-section-title">Search By Year</h1>
          <p className="wines-section-text">
            Search for wines by year to find the perfect bottle for your special occasion.
          </p>
          <div className="wines-divider"></div>
        </header>

        <div>
          <div className="search-wrapper">
            <div className="form">
            <FaSearch className="search-icon" />
              <label className="container-form">
              
                <input
                  className="form-control form-input"
                  type="text"
                  placeholder="Search By Year"
                  onChange={(event) => handleSearch(event)}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          {repos.map((value) => (
            <div className="col-lg-4 col-md-6 mb-4" key={value.id}>
              <div className="card">
                <img
                  className="card-img-top rounded product-image"
                  src={value.image}
                  alt="wine"
                />
                
                <div className="card-body">
         
                  <h5 className="title">{value.wine}</h5>
                  <h6 className="subtitle">Winery: {value.winery}</h6>
                   <div className="wines-divider"></div>
                  <p className="text">Average Rating: {value.average}</p>
                  <div className="review-stats d-flex align-items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="review-icon"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    
                    
                    <span className="review ml-2">
                      Reviews: {value.reviews}
                    </span>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
