const Pool = require("pg").Pool;

const pool = new Pool({
	user: "postgres",
	host: "localhost",
	database: "FF",
	password: "12345",
	port: 5174,
});

module.exports = pool;
