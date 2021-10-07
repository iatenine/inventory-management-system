import React from "react";
// display

export default function addWearhouse () {
    submitHandler = event => {
        event.preventDefault ();
        let {
            warehouse,
        } = event.target;
        let fields = [

        ];
    }
};
render () {
    return (
       <div className="addWarehouse__tablet">
          <h1>Add New</h1>
          <form onSubmit={this.submitHandler}>
            <>
              <div className="addWarehouse__header">Warehouse</div>
              <input
                className="addWarehouse"
                type="text"
                name="warehouse"
                placeholder="Name"
              />
            </>
            </div>
            <div className="addWarehouse__buttons">
              <button>SAVE</button>
              <button
                type="button"
                onClick={this.props.SOMETHING}
                className="cancel-button"
              > cancel
             </button>
             </div>
            </div>
        </div>
    </form>
    );
}
