const insertPeople = () => {
  const dbConfig = require("./config");
  const mysql = require("mysql");

  const connection = mysql.createConnection(dbConfig);

  connection.connect();

  const sql = `INSERT INTO car(branch) values('Fiat')`;

  connection.query(sql);
  connection.end();
};

module.exports = insertPeople;
