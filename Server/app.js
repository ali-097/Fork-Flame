const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

const queries = require("./queries");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/save-reservation", queries.saveReservation);

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});
