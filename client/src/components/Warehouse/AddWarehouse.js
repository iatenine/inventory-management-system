import React from "react";
// display

// export default function addWarehouse () {
//     submitHandler = event => {
//         event.preventDefault ();
//         let {
//             warehouse,
//         } = event.target;
//         let fields = [

//         ];
//     }
// };
// OnSubmit after h1, and on click for button
return (
  <div className="addWarehouse">
    <h1>Add New</h1>
    <div className="addWarehouse__header">Warehouse</div>
    <input
      className="addWarehouse"
      type="text"
      name="warehouse"
      placeholder="Name"
    />
    <div className="addWarehouse__buttons">
      <button>SAVE</button>
      <button type="button" className="cancel-button">
        {" "}
        cancel
      </button>
    </div>
  </div>
);
