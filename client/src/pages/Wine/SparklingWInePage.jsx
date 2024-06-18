import React, { useEffect, useState } from "react";
import "./wines.scss";

export default function SparklingWinePage() {
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
        const sparklingWines = fetchedData.filter(
          (wine) => wine.type === "sparkling"
        );
        setData(sparklingWines);

        if (sparklingWines.length > 0) {
          const randomIndex = Math.floor(Math.random() * sparklingWines.length);
          setInitialWine(sparklingWines[randomIndex]);
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
    <section className="wine-section">
        <div>
      {/* <div className="container"> */}
        <header className="section-header">
          <h1 className="section-title">Celebrate with Sparkling Wines</h1>
          <p className="section-text">
            Discover our exclusive selection of sparkling wines perfect for any
            celebration.
          </p>
        </header>
        <div className="wine-card">
          <div className="wine-content">
            <div className="wine-image">
              <img
                src={initialWine.image}
                alt="wine-img"
                className="wine-img"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="wine-details">
              <h1 className="wine-name">{initialWine.wine}</h1>
              <div className="wine-stats">
                <div className="review-stats">
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
                  <span className="review-text">
                    {initialWine.reviews} reviews
                  </span>
                </div>
                <div className="rating-stats">
                  <span className="rating-text">
                    Rating: {initialWine.average}/5
                  </span>
                </div>
              </div>
              <h2 className="winery">{initialWine.winery}</h2>
              <p className="location">{initialWine.location}</p>

              <button
                className="wine-button"
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
