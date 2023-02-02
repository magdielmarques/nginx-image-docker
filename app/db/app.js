const app = () => {
  const peoplesNames = require("../util/peopleNames");
  const express = require("express");
  const app = express();
  const PORT = 3000;

  const dbConfig = require("./dbConfig");
  const connection = require("mysql").createConnection(dbConfig);
  const MysqlDB = require("./dbConnection");

  const database = new MysqlDB(connection);

  database.connect();
  database.createTable();

  app.get("/", (req, res) => {
    database.insertValue(
      peoplesNames[Math.floor(Math.random() * peoplesNames.length)]
    );
    res.send("<h1>Full Cycle Rocks!</h1>");
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

module.exports = app;
