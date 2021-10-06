const db = require("../config/connection");
const { User, Inventory, Item } = require("../models");
const { users, inventories, items } = require("./seedData.json");

db.once("open", async () => {
  // Delete all Users, Inventories and Items
  await User.deleteMany({});
  await Inventory.deleteMany({});
  await Item.deleteMany({});

  // Seed users, inventories and items from JSON
  await User.insertMany(users);
  await Inventory.insertMany(inventories);
  await Item.insertMany(items);

  // Iterate through all items and randomly assign them to an inventory

  // Iterate through all inventories and randomly assign them to a user

  // console.log('Data seeded!');
  process.exit(0);
});
