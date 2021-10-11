import React from "react";
import Cards from "../components/Card/card";
import { QUERY_SINGLE_INVENTORY } from "../utils/queries";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

export const ItemDashboard: React.FC = () => {
  // Use the useParams hook to get the id from the url
  const { inventoryId } = useParams<{ inventoryId: string | undefined }>();

  const { loading, data } = useQuery(QUERY_SINGLE_INVENTORY, {
    variables: { _id: inventoryId },
  });

  console.log(data);
  if (loading) return <div>Loading...</div>;

  const invItems = data?.inventory.items || {};
  const invName = data?.inventory.name || "";

  console.log("invItems: ", invItems);

  return (
    // dropdown
    <div>
      <div className="ui center aligned container">
        <h1>
          <span className="hiWhite">Items in {invName}</span>
        </h1>
      </div>

      <div className="ui center aligned container">
        <div className="ui one column grid">
          {/* map over items and create like this */}
          <div className="row">
            <div className="column">
              {invItems.map((item: any, index: number) => {
                return (
                  <Cards
                    key={index}
                    {...{
                      name: item.name,
                      quantity: item.quantity,
                      categories: item.categories,
                      _id: item._id,
                    }}
                  />
                );
              })}
            </div>
          </div>
          {/* end here */}
          {/* add item button */}
          <div className="row">
            <div className="column">
              <Link to={`/addItem/${inventoryId}`}>
                <button className="ui fluid primary button">
                  + Add Item to {invName}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDashboard;
