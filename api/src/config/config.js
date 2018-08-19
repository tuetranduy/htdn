import dbConfig from "./db.config";
import envConfig from "./env.config";

const env = process.env.ENV || "development";

module.exports = {
	application: {
		host: envConfig[env].host,
		port: envConfig[env].port,
		secretKey: envConfig[env].secretKey
	},
	database: {
		host: dbConfig[env].host,
		user: dbConfig[env].user,
		password: dbConfig[env].password,
		database: dbConfig[env].database
	}
};