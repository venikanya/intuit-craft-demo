import express from 'express';
import cors from 'cors';

import { addExpenseToTrip, getUser, getTripsByType, loadDB } from './memoryDB.mjs';

const app = express();
const PORT = 9001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  loadDB();
});

app.get("/:userId", (req, res) => {
  if (!req.params.userId) {
    res.status(401).send("Unauthorized");
  }
  res.status(200).send(JSON.stringify(getUser(req.params.userId)));
});

app.get("/travelList/:userId", (req, res) => {
  if (!req.params.userId) {
    res.status(401).send("Unauthorized");
  }
  const query = req.query || {};
  const { type } = query;
  res.status(200).send(JSON.stringify(getTripsByType(type, parseInt(req.params.userId))));
});

app.post("/travelList/:userId/:tripId", (req, res) => {
  if (!req.params.userId) {
    res.status(401).send("Unauthorized");
  }
  if (!req.params.tripId) {
    res.status(401).send("Invalid Trip Id");
  }
  const { body } = req;
  res.status(200).send(JSON.stringify(addExpenseToTrip(parseInt(req.params.userId), req.params.tripId, body)));
})
