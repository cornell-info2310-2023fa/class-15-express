const path = require('path');

require("dotenv").config();
const port = process.env.PORT || 3000;

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello INFO 2310!');
});

// listen for requests
app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}/`);
});
