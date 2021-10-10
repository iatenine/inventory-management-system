import React from "react";
import InventoryCard from "../components/InventoryCard/inventoryCard";

<<<<<<< HEAD
import { useQuery } from '@apollo/client'
import { useMutation } from "@apollo/client"; 

import { QUERY_USER } from "../utils/queries";
import Auth from '../utils/auth'

=======
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
>>>>>>> main

export const InventoryDashboard = () => {

  const {loading, data } = useQuery(QUERY_USER, {
    variables: {_id: Auth.getProfile().data._id}
  });

  
  const inventories = data?.user.inventories || {};
  console.log(inventories)

  if(loading){
    return <div>Loading...</div>
  }

  return (
    // dropdown
    <div>
      <div className="ui center aligned container">
<<<<<<< HEAD
        <h1></h1>
=======
        <h1>Inventory Dashboard</h1>
>>>>>>> main
        <div className="ui one column grid">
          {/* map over items and create like this */}
          <div className="row">
            <div className="column">
<<<<<<< HEAD
              {/* <Cards {...item} /> */}
=======
              <InventoryCard {...inventory} />
>>>>>>> main
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
