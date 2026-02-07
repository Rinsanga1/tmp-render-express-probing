const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

const app_router = require("./config/routes");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app/views'));

// views
app.use("/", app_router);

app.listen(PORT, () => {
  console.log("listening...")
});
