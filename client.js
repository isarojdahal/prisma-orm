const { PrismaClient } = require("@prisma/client");

let prisma = new PrismaClient().$extends({
  model: {
    user: {
      async getUsers() {
        return this.findMany();
      },
    },
  },
});

module.exports = prisma;
