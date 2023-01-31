const runServer = () => {
  const express = require("express");
  const application = express();

  const PORT = 3000;

  application.get("/", (res) => {
    res.send("<h1>Full Cycle Rocks!</h1>");
  });

  application.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

module.exports = runServer;
