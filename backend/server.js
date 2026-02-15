import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("Done");
  res.json("Ok");
});

app.listen(3000, () => {
  console.log("Listening..");
});
