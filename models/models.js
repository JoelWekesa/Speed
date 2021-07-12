const cron = require("node-cron");

let number = [];

cron.schedule("* * * * *", () => {
	number.push(Math.floor(Math.random() * 10));
});

module.exports = {
	number,
};
