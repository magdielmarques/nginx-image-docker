const server = () => {
  const insertPeople = require("./util/insertPeople");
  const express = require("express");
  const application = express();

  const PORT = 3000;

  application.get("/", (req, res) => {
    res.send("<h1>Full Cycle Rocks!</h1>");
  });

  application.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  // insertPeople();
};

module.exports = server;
