# Che Vino

For my capstone project, I created a web application called Che Vino – translation from Italian: "What Wine!"

## Introduction

Che Vino addresses the overwhelming choices in the wine world by helping users discover new wines, read reviews, and check out wine scores. It simplifies the decision-making process when selecting a wine.

Built with React + Vite, Sass, Node, Express.js, and MySQL, Che Vino is designed to enhance the wine-buying experience.

<div style="display: flex; justify-content: space-around;">
  <img src='./homePage.png' alt="Home Page" width='400px' height='300px'>
  <img src='./wineGen.png' alt="Wine Generator" width='150px' height='300px'>
</div>  

## Project Overview

### Description
Che Vino is a web application that displays a random bottle of wine based on the user's selected variety, such as Red, White, Port, Rosé, Sparkling, and Dessert wine.

### Problem
With hundreds of wine varieties available, choosing the right wine can be overwhelming. Che Vino removes the guesswork by suggesting a random bottle based on the user's choice of wine type, providing the wine's name, image, winery location, and year.

### Solution
Che Vino assists users in discovering new wines, reading reviews, and checking wine scores, making the wine selection process easier.

### Target Audience
Wine enthusiasts looking to discover new wines and simplify their selection process.

### Tech Stack
Frontend: React, Vite, Sass
Backend: Node, Express.js, MySQL

## Project Setup

### Installation
1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm start` to start the development server

### Dependencies
`vite`
`react`
`react-dom`
`sass`
`axios`
`express`
`mysql`

## Project Structure

### Client
- `client/` - Contains the client-side code
    - `src/` - Contains the main source code
        - `components/` - Contains the React components
        - `pages/` - Contains the application pages
        - `styles/` - Contains the Sass files
  
### Server
- `server/` - Contains the server-side code
  - `routes/` - Contains the routes
  - `config/` - Contains the database configuration
  - `server.js` - The server entry point
  - `controllers.js` - The controller logic
  - `models.js` - The data models

