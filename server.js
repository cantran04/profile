const express = require("express");
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');


//dotenv configuartion
dotenv.config();


// midleware
app.use(cors());
app.use(express.json());

// Define a simple route
app.get("/", (req, res) => {
  res.send('<h1>Welcome!ne</h1>');
});

//port
const port = process.env.PORT || 8080;

// listen
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});