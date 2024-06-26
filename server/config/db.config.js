const mysql = require("mysql2");

let dbConn = null;
function handleDisconnect() {
  dbConn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });

  dbConn.connect(function (err) {
    if (err) {
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 8080);
    }
  });

  dbConn.on("error", function (err) {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}
handleDisconnect();
setInterval(function () {
  dbConn.query("SELECT 1");
}, 8080);

module.exports = dbConn;
