import React from "react";
import Cards from "../components/Card/card";

import { useQuery } from '@apollo/client'
import { useMutation } from "@apollo/client"; 

import { QUERY_USER } from "../utils/queries";
import Auth from '../utils/auth'


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
        <h1></h1>
        <div className="ui one column grid">
          {/* map over items and create like this */}
          <div className="row">
            <div className="column">
              {/* <Cards {...item} /> */}
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
