const connectToMongo = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();
const port = 5000;

// Available routs
app.use(cors());

app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  var isDbConnected = connectToMongo();
  res.send({ status: isDbConnected });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

connectToMongo();
