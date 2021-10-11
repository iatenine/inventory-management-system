import React from "react";
import Cards from "../components/Card/card";
import { QUERY_SINGLE_INVENTORY} from '../utils/queries'
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";

const item = {
  name: "Hello",
  quantity: 442,
  categories: ["Dairy", "Beverages"],
};


export const ItemDashboard = () => {

  const { inventoryId } = useParams();

  const {loading, data} = useQuery(QUERY_SINGLE_INVENTORY, {
    variables: {_id: inventoryId}
  })

  if(loading){
    <div>Loading...</div>
  }

  const invItems = data?.inventory.items || []

  console.log(data)
  return (
    // dropdown
    <div>
      <div className="ui center aligned container">
        <h1>Items in {}</h1>
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
            {invItems.map((item) => {
              return <Cards {...item} />
            })}
            </div>
          </div>
          {/* end here */}
          {/* add item button */}
          <div className="row">
            <div className="column">
              <button className="ui fluid primary button" type="submit">
                Update Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDashboard;
