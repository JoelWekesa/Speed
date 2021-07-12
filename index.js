const express = require("express");
const cors = require("cors");
const { json, urlencoded } = require("express");
const { db } = require("./database/db");
const { numbers } = require("./routes/numbers");
const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/api/numbers", numbers);

const PORT = 5000;

try {
	db.authenticate();
	console.log("Connection has been established successfully.");
} catch (error) {
	console.error("Unable to connect to the database:", error);
}

app.listen(PORT, (err) => {
	if (err) {
		console.log(err.message);
	}
	console.log(`Server running on port ${PORT}`);
});
