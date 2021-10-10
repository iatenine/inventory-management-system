import React from "react";
import Cards from "../components/Card/card";

import { useQuery } from '@apollo/client'
import { useMutation } from "@apollo/client"; 

import { QUERY_USER } from "../utils/queries";
import Auth from '../utils/auth'

export const InventoryDashboard = () => {


    console.log(Auth.getProfile)






  return (
    // dropdown
    <div>
      <div className="ui center aligned container">
        <h1>Items in |ITEM NAME HERE|</h1>
        <div class="ui one column grid">
          {/* map over items and create like this */}
          <div class="row">
            <div class="column">
              <Cards />
            </div>
          </div>
          {/* end here */}
          {/* add iventory button */}
          <div class="row">
            <div class="column">
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
