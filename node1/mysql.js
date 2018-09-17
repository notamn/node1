var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: '',
  password: '',
  database: '',
  port: ''
});

connextion.connect();

var query = connection.query("SELECT" `title`, FROM `test`WHERE `id`='1', function(error, result) {
  if(error) throw error;
  console.log(result);
});

connection.end();
