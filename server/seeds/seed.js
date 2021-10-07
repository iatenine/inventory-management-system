const db = require("../config/connection");
const { User, Inventory, Item } = require("../models");
const { users, inventories, items } = require("./seedData.json");

const categoryArray = [
  "general",
  "produce",
  "frozen",
  "Mazdas",
  "Dell",
  "Management",
  "What kind of store is this?",
];

db.once("open", async () => {
  // Delete all Users, Inventories and Items
  await User.deleteMany({});
  await Inventory.deleteMany({});
  await Item.deleteMany({});

  // Seed users, inventories and items from JSON
  // await User.create(users[0]);
  await User.insertMany(users);
  await Inventory.insertMany(inventories);
  await Item.insertMany(items);

  // Iterate through all items and randomly assign them to an inventory
  const allUsers = await User.find({});
  const allInventories = await Inventory.find({});
  const allItems = await Item.find({});

  // Iterate through all items and inventories to randomly assign:
  // categories -> items
  // items -> inventories
  // inventories -> users
  for (let x = 0; x < allItems.length; x++) {
    const category =
      categoryArray[Math.floor(Math.random() * categoryArray.length)];
    const inventory =
      allInventories[Math.floor(Math.random() * allInventories.length)];
    await Item.findOneAndUpdate(
      { _id: allItems[x]._id },
      {
        $push: { category },
      }
    );
    await Inventory.findOneAndUpdate(
      { _id: inventory._id },
      {
        $push: { items: [allItems[x]] },
      }
    );
  }

  for (let x = 0; x < allInventories.length; x++) {
    const owner = allUsers[Math.floor(Math.random() * allUsers.length)];
    await User.findOneAndUpdate(
      { _id: owner._id },
      {
        $push: { inventories: [allInventories[x]] },
      }
    );
  }

  process.exit(0);
});
