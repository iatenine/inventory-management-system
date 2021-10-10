import React from "react";
import Cards from "../components/Card/card";

const item = {
  name: "Hello",
  quantity: 442,
  categories: ["Dairy", "Beverages"],
};

export const InventoryDashboard = () => {
  return (
    // dropdown
    <div>
      <div className="ui center aligned container">
        <h1>Items in |ITEM NAME HERE|</h1>
        <div className="ui one column grid">
          {/* map over items and create like this */}
          <div className="row">
            <div className="column">
              <Cards {...item} />
            </div>
          </div>
          {/* end here */}
          {/* add iventory button */}
          <div className="row">
            <div className="column">
              <button className="ui fluid primary button" type="submit">
                Add Inventory
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InventoryDashboard;
