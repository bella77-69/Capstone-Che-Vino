// import React from "react";
// import logo from "../../assets/images/wine-background.jpg";
// import "./hero.scss";

// const Hero = () => {
//   return (
//     <section className="hero">
//       <div className="hero-container">
//         <div className="hero-text">
//           <h1>
//             Discover Exceptional Wines with Che Vino
//           </h1>
//           <p>
//             Discover wines with ease using Che Vino! Randomly select from Red,
//             White, Dessert, Port, Rose, or Sparkling varieties. Explore our top
//             20 wines on the search page, complete with comments, scores, and
//             prices. Drink responsibly!
//           </p>
//           <a href="/contact" className="hero-button">
//             Contact Us
//           </a>
//         </div>
//         <div className="hero-image">
//           <img src={logo} alt="che vino logo" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Discover Exceptional Wines with Che Vino
          </h1>
          <p>
            Discover wines with ease using Che Vino! Randomly select from Red,
            White, Dessert, Port, Rose, or Sparkling varieties. Explore our top
            20 wines on the search page, complete with comments, scores, and
            prices. Drink responsibly!
          </p>
          <a href="/contact" className="hero-button">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
