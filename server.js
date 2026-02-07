const express = require("express");
const app = express();
const PORT = 3000;


const print = " trying to see if i can host an express app on render ";
app.get("/", (_req, res) => {
  res.send(print);
});


app.listen(PORT, () => {
  console.log("listening...")
});
