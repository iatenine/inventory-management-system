import React from "react";
import Cards from "../components/Card/card";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";

import InventoryCard from "../components/InventoryCard/inventoryCard";
import { QUERY_USER } from "../utils/queries";
import Auth from "../utils/auth";

export const InventoryDashboard = () => {
  const profile: any = Auth.getProfile();
  console.log(profile)
  const { loading, data } = useQuery(QUERY_USER,  {
    variables: { _id: profile.data._id },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(data)
  const inventories = data?.user.inventories || {};

  console.log(inventories)

  if(inventories.legnth < 1){
    return (
         <div>
      <div className="ui center aligned container">
        <h1 className="">
          <span className="hiWhite">Inventory Dashboard</span>
        </h1>
      </div>
        <h3 style={{color: "white"}}> Currently, you do not have any inventories! Please use the add inventory button below to add some!</h3>
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
    )
  }

  return (
    // dropdown
    <div>
      <div className="ui center aligned container">
        <h1 className="">
          <span className="hiWhite">Inventory Dashboard</span>
        </h1>
        <div className="ui three column grid">
          {/* map over items and create like this */}
          <div className="row">
            <div className="column">
              {inventories.map((inventory: any) => {
                return (
                  <div key={inventory._id} className="ui special cards">
                    <div className="card">
                      <div className="blurring dimmable image">
                        <div className="ui dimmer">
                          <div className="content"></div>
                        </div>
                      </div>
                      <div className="content">
                        <div className="header">{inventory.name}</div>
                        <span className="">
                          Items: {inventory.items.length}
                        </span>
                      </div>
                      <div className="extra content">
                        <div className="center">
                          <Link
                            className="ui fluid primary button"
                            to={`inventory/${inventory._id}`}
                          >
                            View
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
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
