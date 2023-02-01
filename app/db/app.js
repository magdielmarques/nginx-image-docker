const app = () => {
  const database = require("./dbConnection");
  const express = require("express");
  const app = express();
  const PORT = 3000;

  database();

  app.get("/", (req, res) => {
    res.send(`<h1>Full Cycle Rocks!</h1> <br />`);
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

module.exports = app;
