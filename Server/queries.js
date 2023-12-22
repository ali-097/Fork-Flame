const db = require("./pool");

const saveReservation = (req, res) => {
	const { name, email, phone, date, time, people } = req.body;
	db.query(
		"INSERT INTO reservation (name, email, phone, date, time, people) VALUES ($1, $2, $3, $4, $5, $6)",
		[name, email, phone, date, time, people],
		(err, result) => {
			if (err) {
				console.log(err);
			} else {
				res.send("Values Inserted");
			}
		}
	);
	console.log(req.body);
};

const getReservations = (req, res) => {
	db.query("SELECT * FROM reservation", (err, result) => {
		if (err) {
			console.log(err);
			res.status(500).json({ error: "Internal Server Error" });
		} else {
			// Log and send the result
			console.log(result.rows);
			res.status(200).json(result.rows);
		}
	});
};

module.exports = { saveReservation, getReservations };
