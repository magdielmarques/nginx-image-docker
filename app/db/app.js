const app = () => {
  const express = require("express");
  const app = express();
  const PORT = 3000;

  const database = require("./dbConnection");
  database();

  app.get("/", (req, res) => {
    res.send(`<h1>Full Cycle Rocks!</h1> <br />`);
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

module.exports = app;
