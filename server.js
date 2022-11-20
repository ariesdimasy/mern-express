const express = require("express");
const app = express();
const port = 3500;
const dotenv = require("dotenv");

dotenv.config();

const count = require("./helpers/count");

app.use(count);

app.set("views", "./views"); // specify the views directory
app.set("view engine", "ejs"); // register the template engine

app.get("/", function (req, res) {
  let people = ["geddy", "neil", "alex", "dimas"];
  res.render("index", { people });
});

app.get("/contact", function (req, res) {
  res.send("contact");
});

app.get("/service", function (req, res) {
  res.send("service");
});

app.post("/contact", function (req, res) {
  res.json({
    foo: "bar",
  });
});

app.listen(process.env.PORT || port, "localhost" || "0.0.0.0", function () {
  console.log("port listen in " + process.env.PORT || port);
});
