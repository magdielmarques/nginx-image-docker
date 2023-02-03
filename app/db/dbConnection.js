class dbConnection {
  constructor(connection) {
    this._connection = connection;
  }

  connect() {
    this._connection.connect((error) => {
      if (error) {
        console.log("Database Connection Failed!", error);
      } else {
        console.log("Connected to Database!");
      }
    });
  }

  createTable() {
    const tableQuery =
      "CREATE TABLE people (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))";

    this._connection.query(tableQuery, (error) => {
      if (error) console.log(`Table People not created: \n ${error}`);
      else console.log(`Successfully created table People`);
    });
  }

  insertValue(name) {
    const sql = `INSERT INTO people(name) values('${name}')`;

    this._connection.query(sql, (error) => {
      if (error) console.log(`Value not inserted: \n ${error}`);
      else console.log(`Successfully added value into table`);
    });
  }

  async read() {
    const sql = "SELECT name FROM people;";

    const response = new Promise((resolve, reject) => {
      this._connection.query(sql, (error, result) => {
        if (error) console.log("Error", error);
        resolve(result);
      });
    });

    return response;
  }
}

module.exports = dbConnection;
