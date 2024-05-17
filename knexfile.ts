import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      user: 'postgres',
      password: 'postgres',
      port: 5432,
      host: '127.0.0.1',
      database: 'orm',
    }
  },

};

module.exports = config;