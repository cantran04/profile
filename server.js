const express = require("express");
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

//dotenv configuartion
dotenv.config();


//static file assets
app.use(express.static(path.join(__dirname, './client/build')));


// midleware
app.use(cors());
app.use(express.json());

// Define a simple route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'client','build','index.html'))
});

//port
const port = process.env.PORT || 8080;

// listen
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
