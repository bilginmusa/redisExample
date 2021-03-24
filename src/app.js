import { getData } from "../dist/lib/service";
import { redisAction } from "../dist/lib/redis";

const redisClient = new redisAction();

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("");
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const cacheData = await redisClient.get(id);
  if (!cacheData) {
    console.log("Redis Data Empty:", cacheData);
    const data = await getData(id);
    await redisClient.set(id, data);
    res.json(data);
  }
  console.log("Redis Data OK:", cacheData);
  res.json(cacheData);
});

app.listen(port, () => {
  console.log(`Port listening..`);
});
