const app = require("express").Router();
const prisma = require("../client");

// GET
app.get("/", async (req, res) => {
  res.json(await prisma.user.getUsers());
});

// POST
app.post("/", (req, res) => {
  const { email, name, address } = req.body;
  console.log("email", email);
  console.log("name", name);
  if (!email || !name || !address)
    res.send("Email, address and  name are required");

  prisma.user
    .create({
      data: {
        email,
        name,
        userDetail: {
          create: {
            address,
          },
        },
      },
    })
    .then((user) => {
      res.json(user);
    });
});

module.exports = app;
