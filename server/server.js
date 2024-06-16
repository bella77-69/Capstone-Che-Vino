const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
const reviewRoute = require("./routes/review.route.js");
const allWineRoute = require("./routes/allWine.route.js");
const commentRoute = require("./routes/comment.route.js");
const contactRoute = require("./routes/contact.route.js");

app.use('/wines/review', reviewRoute);
app.use('/wines/comments', commentRoute);
app.use('/wines/all', allWineRoute);
app.use('/wines/contact', contactRoute);

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.status(200).json("Hello");
})
app.listen(PORT, (req, res) => {
  console.log(`Server connected to port: ${PORT}`);
});
