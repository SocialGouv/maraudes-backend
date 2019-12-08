// hack for azure+knex+ssl connection strings - https://github.com/knex/knex/issues/852
//
// const pg = require("pg");
// pg.defaults.ssl = true;
//

const { join } = require("path");
require("dotenv").config({ path: `${__dirname}/../../.env` });

const connectionUrl = process.env.DATABASE_URL || {
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB
};

const connection = {
  client: "postgresql",
  connection: connectionUrl,
  migrations: {
    directory: join(__dirname, "db/migrations")
  }
};

module.exports = connection;
