const express = require("express");
const cors = require("cors");

const adminRoutes = require("./routes/adminRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", adminRoutes);
app.use("/", (req, res) => {
  res.send("Hello");
});

app.listen(5000);
