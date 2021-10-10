import React from "react";
import Cards from "../components/Card/card";

const item = {
  name: "Hello",
  quantity: 442,
  categories: ["Dairy", "Beverages"],
};

export const ItemDashboard = () => {
  return (
    // dropdown
    <div>
      <div className="ui center aligned container">
        <h1>Items in |INVENTORY NAME HERE|</h1>
        <div className="ui compact menu">
          <div className="ui simple dropdown item">
            Dropdown
            <i className="dropdown icon"></i>
            <div className="menu">
              {/* map over item categories and create like this */}
              <div className="item">Category 1</div>
              {/* end here */}
            </div>
          </div>
        </div>
      </div>

      <div className="ui center aligned container">
        <div className="ui one column grid">
          {/* map over items and create like this */}
          <div className="row">
            <div className="column">
              <Cards {...item} />
              <Cards {...item} />
              <Cards {...item} />
              <Cards {...item} />
              <Cards {...item} />
              <Cards {...item} />
              <Cards {...item} />
              <Cards {...item} />
              <Cards {...item} />
            </div>
          </div>
          {/* end here */}
          {/* add item button */}
          <div className="row">
            <div className="column">
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
