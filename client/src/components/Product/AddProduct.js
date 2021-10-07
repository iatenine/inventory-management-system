import React from "react";
// display

export default function addProduct () {
    submitHandler = event => {
        event.preventDefault ();
        let {
            productId,
            name,
            description,
        } = event.target;
        let items = [
            productId,
            name,
            description,
            quantity,
        ]
        let itemAllFilled = items
        .map(field => {
            return helper.isEmpty(field)
        })
        .every(val => {
            return val === false;
        });
    if (itemAllFilled) {
        const itemObj = {
            productId: productId.value.trim(),
            name: name.value.trim(),
            description: description.value.trim()
        }
    }
};
// If stock?
render () {
        return (
            <div className="addWarehouse__tablet">
               <h1>Add New</h1>
               <form onSubmit={this.submitHandler}>
                   <div className="addWarehouse__header">Warehouse</div>
                   <input
                     className="addWarehouse"
                     type="text"
                     name="warehouse"
                     placeholder="Name"
                   />
                 <div className="addWarehouse__buttons">
                   <button>SAVE</button>
                   <button
                     type="button"
                     onClick={this.props.SOMETHING}
                     className="cancel-button"
                   > cancel
                  </button>
                  </div>
           </form>
     </div>
         );
}