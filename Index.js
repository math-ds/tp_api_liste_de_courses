const express = require("express");

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

const routeur = require("./routes/routeur");
app.use("/", routeur);
app.listen(port, () => {
  console.log(`Tout fonctionne ${port}`);
});
