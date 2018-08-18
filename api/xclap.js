var xclap = require('xclap');

const tasks = {
	dev: "node node_modules\\nodemon\\bin\\nodemon.js api.js",
	"run-dev": {
		desc: "check format of code by eslint then start",
		task: ["lint", "start"]
	},
	start: "node node_modules\\nodemon\\bin\\nodemon.js api.js",
	lint: "node node_modules\\eslint\\bin\\eslint.js src --ext js"
};

xclap.load(tasks);