const dbConnection = () => {
  const mysql = require("mysql");
  const dbConfig = require("./dbConfig");

  const connection = mysql.createConnection(dbConfig);

  connection.connect((error) => {
    if (error) {
      console.log("Database Connection Failed !!!", error);
    } else {
      console.log("connected to Database");
    }
  });
};

module.exports = dbConnection;
