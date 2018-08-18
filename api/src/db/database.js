import Bookshelf from "bookshelf";
import knex from "knex";
import config from "../config/config";

const knexConfig = knex({
    client: "mysql",
    connection: {
        host: config.database.host,
        user: config.database.user,
        password: config.database.password,
        database: config.database.database,
        charset: "utf8"
    },
    pool: {
        min: 0,
        max: 7
    }
});

export default Bookshelf(knexConfig);