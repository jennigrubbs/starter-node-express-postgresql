const path = require("path");
require("dotenv").config();
const { DATABASE_URL } = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};

/* Below is where module 39.2 finished with this file.

module.exports = {
  development: {
    client: "postgresql",
    connection: "",
    },
  };
*/

/* - below is what the knexfile.js started out as 
before removing all except development environment

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3",
    },
  },

  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: {
      database: "db_test",
      user: "username_test",
      password: "password_test",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "db_staging",
      user: "username_staging",
      password: "password_staging",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "db_production",
      user: "username_production",
      password: "password_production",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

};
*/