const db = require("../config/connection");
const { User, Inventory, Item } = require("../models");

const seedData = require("./seedData.json");

db.once("open", async () => {
  await User.deleteMany({});

  // const technologies = await Tech.insertMany(techData);

  // console.log('Technologies seeded!');
  process.exit(0);
});
