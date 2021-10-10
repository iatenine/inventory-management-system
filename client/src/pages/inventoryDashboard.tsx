import React from "react";
import Cards from "../components/Card/card";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client'
import { useMutation } from "@apollo/client"; 

import InventoryCard from "../components/InventoryCard/inventoryCard";
import { QUERY_USER } from "../utils/queries";
import Auth from '../utils/auth'

export const InventoryDashboard = () => {

  const profile: any = Auth.getProfile() 

  const {loading, data } = useQuery(QUERY_USER, {
    variables: {_id: profile.data._id}
  });

  
  if(loading){
    return <div>Loading...</div>
  }

  const inventories = data?.user.inventories || {};

    

 return (
    // dropdown
    <div>
      <div className="ui center aligned container">
        <h1>Inventory Dashboard</h1>
        <div className="ui one column grid">
          {/* map over items and create like this */}
          <div className="row">
            <div className="column">
            {inventories.map((inventory: any) => {
              {console.log(inventory)}
    return (<div className="ui special cards">
      <div className="card">
        <div className="blurring dimmable image">
          <div className="ui dimmer">
            <div className="content"></div>
          </div>
          {/* <img src={Default} alt={inventory.name} /> */}
        </div>
        <div className="content">
          <div className="header">{inventory.name}</div>
          <span className="">Items: {inventory.items.length}</span>
        </div>
        <div className="extra content">
          <div className="center">
            <Link
             className="ui fluid primary button" to={`inventory/${inventory._id}`}>View
             </Link>
          </div>
        </div>
      </div>
    </div> )
            })}  
              
            </div>
          </div>
          {/* end here */}
          {/* add iventory button */}
          <div className="row">
            <div className="column">
              <Link to="/add-inventory">
                <button className="ui fluid primary button" type="submit">
                  Add Inventory
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InventoryDashboard;
