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

module.exports = { saveReservation };
