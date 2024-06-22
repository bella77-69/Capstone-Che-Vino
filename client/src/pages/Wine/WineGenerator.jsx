import React, { useState } from 'react';
import './styles.scss';

const WineGenerator = () => {
  const [wine, setWine] = useState(null);

  const fetchWine = async () => {
    const response = await fetch(`http://localhost:8080/wines/all`);
    const data = await response.json();
    const randomWine = data[Math.floor(Math.random() * data.length)];
    setWine(randomWine);
  };

  const handleRandomWine = () => {
    fetchWine();
  };

  const handleWineTypeChange = (event) => {
    const wineType = event.target.value;
    if (wineType) {
      window.location.href = `/wines/${wineType}`;
    }
  };

  return (
    <section className="wine-gen-section">
      <div className="wine-gen-container">
        <header className="wine-gen-section-header">
          <h1 className="wine-gen-section-title">Wine Generator</h1>
          <p className="wine-gen-section-text">
            Randomly select from a variety of wines or choose a specific type to discover.
          </p>
          <div className='wine-gen-divider'></div>
          <select className="wine-gen-select" onChange={handleWineTypeChange}>
                <option value="">Select Wine Type</option>
                <option value="red">Red</option>
                <option value="white">White</option>
                <option value="dessert">Dessert</option>
                <option value="port">Port</option>
                <option value="rose">Rose</option>
                <option value="sparkling">Sparkling</option>
              </select>
        </header>
        <div className="wine-gen-card">
          <div className="wine-gen-content">
            <div className="wine-gen-image">
              <img
                src={wine ? wine.image : 'path-to-default-wine-image.jpg'}
                alt="wine-img"
                className="wine-gen-img"
              />
            </div>
            <div className="wine-gen-details">
              <h1 className="wine-gen-name">{wine ? wine.wine : 'Initial Wine'}</h1>
              <div className="wine-gen-stats">
                <div className="wine-gen-review-stats">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="wine-gen-review-icon"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="wine-gen-review-text">{wine ? wine.reviews : '0'} reviews</span>
                </div>
                <div className="wine-gen-rating-stats">
                  <span className="wine-gen-rating-text">Rating: {wine ? wine.average : '0'}/5</span>
                </div>
              </div>
              <h2 className="wine-gen-winery">{wine ? wine.winery : 'Initial Winery'}</h2>
              <p className="wine-gen-type">Type: {wine ? wine.type : 'Initial Type'}</p>
              <p className="wine-gen-location">{wine ? wine.location : 'Initial Location'}</p>
              <button className="wine-gen-button" onClick={handleRandomWine}>
                Generate Random Wine
              </button>
           
            </div>
          </div>
        </div>
  
      </div>
    </section>
  );
};

export default WineGenerator;