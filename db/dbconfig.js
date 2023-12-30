const mysql = require("mysql2");

const dbConnection = mysql.createPool({
	user: "evangadi-admin",
	host: "localhost",
	database: "evangadiforum_db",
	password: "3143577696",
	connectionLimit: 10,
});

// dbConnection.execute("select 'test'", (err, result) => {
// 	if (err) {
// 		console.log(err.message);
// 	} else {
// 		console.log(result);
// 	}
// });

module.exports = dbConnection.promise();