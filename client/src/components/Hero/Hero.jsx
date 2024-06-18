import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Discover Exceptional Wines with Che Vino</h1>
          <p>
            Discover wines with ease using Che Vino! Randomly select from Red,
            White, Dessert, Port, Rose, or Sparkling varieties. Explore our top
            20 wines on the search page, complete with comments, scores, and
            prices. Drink responsibly!
          </p>
          <a href="/wine-generator" className="hero-button">
            Discover Wines
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
