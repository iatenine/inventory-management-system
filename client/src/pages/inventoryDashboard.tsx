import React from "react";
import InventoryCard from "../components/InventoryCard/inventoryCard";
import { Link } from "react-router-dom";

const inventory = {
  name: "Inventory",
  items: [
    "hello",
    {
      name: "hello",
      quantity: "1",
    },
  ],
};

export const InventoryDashboard = () => {
  return (
    // dropdown
    <div>
      <div className="ui center aligned container">
        <h1>Inventory Dashboard</h1>
        <div className="ui one column grid">
          {/* map over items and create like this */}
          <div className="row">
            <div className="column">
              <InventoryCard {...inventory} />
            </div>
          </div>
          {/* end here */}
          {/* add iventory button */}
          <div className="row">
            <div className="column">
              <Link to="/add-inventory">
                <button className="ui fluid primary button" type="submit">
                  Add Inventory
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InventoryDashboard;
