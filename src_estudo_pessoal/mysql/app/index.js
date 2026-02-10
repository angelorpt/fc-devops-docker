import express from "express";
import mysql from "mysql";

const PORT = 3000;
const app = express();

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb"
};

const conn = mysql.createConnection(config);
const sql = "INSERT INTO people(name) values ('Joaozinho')";
conn.query(sql);
conn.end();

app.get("/", (req, res) => {
  res.send({ message: "Tudo certo " });
});

app.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta: ${PORT}`);
});
