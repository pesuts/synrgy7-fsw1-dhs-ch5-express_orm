import express, { Express, Response } from "express";
import knex from "knex";
import { Model } from "objection"

import router from "./routes"

const app: Express = express();
const port = 8000;
app.use(express.json())

const knexInstance = knex({
  client: 'pg',
    connection: {
      user: 'postgres',
      password: 'postgres',
      port: 5432,
      host: '127.0.0.1',
      database: 'orm',
    }
})

Model.knex(knexInstance)

app.get("/", (_, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use(router)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
