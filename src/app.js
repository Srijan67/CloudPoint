const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 3000;

// defining paths
const staticPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);

//calling public files
app.use(express.static(staticPath));

//routing
app.get("/", (req, res) => {
  res.send("This is my HOME PAGE.");
});
app.get("/about", (req, res) => {
  res.send("This is about page.");
});
app.get("*", (req, res) => {
  res.send("Error 404! Page is not found.");
});

//declaring port
app.listen(port, () => {
  console.log(`Listening to port at ${port}`);
});
