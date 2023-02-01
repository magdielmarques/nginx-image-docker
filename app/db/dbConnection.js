const dbConnection = () => {
  const mysql = require("mysql");
  const dbConfig = require("./dbConfig");

  const connection = mysql.createConnection(dbConfig);

  connection.connect((error) => {
    if (error) {
      console.log("Database Connection Failed!", error);
    } else {
      console.log("Connected to Database!");
    }
  });

  const tableQuery =
    "CREATE TABLE people (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))";

  connection.query(tableQuery, (error) => {
    if (error) console.log(`Table People not created: \n ${error}`);
    else console.log(`Successfully created table People`);
  });
};

module.exports = dbConnection;
