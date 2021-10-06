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
  await User.insertMany(users);
  await Inventory.insertMany(inventories);
  await Item.insertMany(items);

  // Iterate through all items and randomly assign them to an inventory
  const allUsers = await User.find({});
  const allInventories = await Inventory.find({});
  const allItems = await Item.find({});

  allItems.map(async (item) => {
    console.log(item._id);
    const catedfdgory =
      categoryArray[Math.floor(Math.random() * categoryArray.length)];
    await Item.findByIdAndUpdate(item._id, {
      $push: { category: $each["Mazda"] },
    });
    console.assert(item.category.length !== 0, "Failed to update category");
    return item;
  });

  console.log(allItems[0]);

  // console.log('Data seeded!');
  process.exit(0);
});
