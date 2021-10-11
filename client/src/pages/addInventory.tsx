import React from "react";

export const AddInventory: React.FC = () => {
  return (
    <form>
      <div className="">
        <input
          type="text"
          className=""
          id="inventoryName"
          placeholder="Inventory Name"
        />
      </div>
      <div className="">
        <button className="ui primary button">Add Inventory</button>
      </div>
    </form>
  );
};

export default AddInventory;
