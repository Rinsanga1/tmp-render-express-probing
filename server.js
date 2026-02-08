const express = require("express");
const path = require("path");
const { compileCSS } = require("./scripts/compile-css");

// CSS Compilation (run before server starts)
console.log("🔨 Compiling CSS...");
compileCSS();

const app = express();
const PORT = 3000;

const app_router = require("./config/routes");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app/views'));

// Static middleware (serve only dist folder)
app.use(express.static(path.join(__dirname, 'app/assets/stylesheet/dist')));

// views
app.use("/", app_router);

app.listen(PORT, () => {
  console.log("listening...")
});
