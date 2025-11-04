const express = require("express");

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use(express.static("public"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const routeur = require("./routes/routeur");
app.use("/", routeur);
app.listen(port, () => {
  console.log(`Tout fonctionne ${port}`);
});
