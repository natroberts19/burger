// Set up MySQL connection.
var mysql = require("mysql");

try {
  var pass = require("./keys.js")
 }
 catch (e) {
  console.log('oh no big error')
  console.log(e)
 }

var connection;

if (process.env.JAWSDB_URL) {

  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: pass,
  database: "burgers_db"
});
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
