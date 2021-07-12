const { Router } = require("express");
const { number } = require("../models/models");

const router = Router();

const numbers = router.get("/", (req, res) => {
	try {
		return res.status(200).json({
			success: "Successfully fetched numbers",
			number,
		});
	} catch (error) {
		return res.status(500).json({
			error: error.message,
		});
	}
});

module.exports = {
	numbers,
};
