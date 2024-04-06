const express = require("express");
const userRoutes = require("./routes/user.route");
const prisma = require("./client");

const app = express();
app.use(express.json());
app.use("/users", userRoutes);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
  prisma.$connect();
});
