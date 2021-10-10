import React from "react";
import Cards from "../components/Card/card";

export const ItemDashboard = () => {
  return (
    // dropdown
    <div>
      <div className="ui center aligned container">
        <h1>Items in |INVENTORY NAME HERE|</h1>
        <div class="ui compact menu">
          <div class="ui simple dropdown item">
            Dropdown
            <i class="dropdown icon"></i>
            <div class="menu">
              {/* map over item categories and create like this */}
              <div class="item">Category 1</div>
              {/* end here */}
            </div>
          </div>
        </div>
      </div>

      <div className="ui center aligned container">
        <div class="ui one column grid">
          {/* map over items and create like this */}
          <div class="row">
            <div class="column">
              <Cards />
            </div>
          </div>
          {/* end here */}
          {/* add item button */}
          <div class="row">
            <div class="column">
              <button className="ui fluid primary button" type="submit">
                Add Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDashboard;
