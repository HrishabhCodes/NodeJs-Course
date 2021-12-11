const path = require("path");
const express = require("express");

const app = express(); // we are storing the complete express application in "app"
const publicDir = path.join(__dirname, "..", "/public");

app.set("view engine", "hbs");

app.use(express.static(publicDir));

app.get("/", (req, res) => {
  // render is used for rendering views
  res.render("index", {
    title: "Weather Application",
    name: "Hrishabh Jain",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Hrishabh Jain",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    message:
      "I’m currently a CSE undergrad who loves to explore different fields. Artificial Intelligence is something which fascinates me a lot but since I had just started coding few months ago for the first time, I decided to learn the basics first with Java. At present, I’m learning Java and JS and now I know quite a bit in terms of basic concepts.",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    location: "India",
    age: "Clear!",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000!");
});