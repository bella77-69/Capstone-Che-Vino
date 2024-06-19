import React, { useEffect, useState } from "react";
import "./wines.scss";

export default function WhiteWinePage() {
  const [data, setData] = useState([]);
  const [initialWine, setInitialWine] = useState({
    image: "path-to-default-wine-image.jpg",
    wine: "Initial Wine",
    reviews: "0",
    average: "0",
    winery: "Initial Winery",
    location: "Initial Location",
    type: "Initial Type",
  });

  useEffect(() => {
    const fetchWineData = async () => {
      try {
        const response = await fetch("http://localhost:8080/wines/all");
        const fetchedData = await response.json();
        const whiteWines = fetchedData.filter((wine) => wine.type === "white");
        setData(whiteWines);

        if (whiteWines.length > 0) {
          const randomIndex = Math.floor(Math.random() * whiteWines.length);
          setInitialWine(whiteWines[randomIndex]);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchWineData();
  }, []);

  const handleWineGeneratorClick = () => {
    if (data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.length);
      setInitialWine(data[randomIndex]);
    }
  };

  return (
    <section className="wines-section">
   
      <div className="wines-container">
        <header className="wines-section-header">
          <h1 className="wines-section-title">Explore the Finest White Wines</h1>
          <p className="wines-section-text">
            Savor our handpicked collection of exquisite white wines from
            vineyards around the globe.
          </p>
        </header>
        <div className="wines-card">
          <div className="wines-content">
            <div className="wines-image">
              <img
                src={initialWine.image}
                alt="wine-img"
                className="wines-img"
           
              />
            </div>
            <div className="wines-details">
              <h1 className="wines-name">{initialWine.wine}</h1>
              <div className="wines-stats">
                <div className="wines-review-stats">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="wines-review-icon"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="wines-review-text">
                    {initialWine.reviews} reviews
                  </span>
                </div>
                <div className="wines-rating-stats">
                  <span className="wines-rating-text">
                    Rating: {initialWine.average}/5
                  </span>
                </div>
              </div>
              <h2 className="wines-winery">{initialWine.winery}</h2>
              <p className="wines-location">{initialWine.location}</p>

              <button
                className="wines-button"
                onClick={handleWineGeneratorClick}
              >
                Generate Random Wine
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
