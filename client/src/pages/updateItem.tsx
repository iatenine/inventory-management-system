import React, { useState } from "react";
import { QUERY_ITEM } from "../utils/queries";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

export const UpdateItem: React.FC = () => {
  // Use the useParams hook to get the id from the url
  const { itemId } = useParams<{ itemId: string | undefined }>();
  const formData = useState({
    name: "",
    quantity: 0,
  });

  const { loading, data } = useQuery(QUERY_ITEM, {
    variables: { _id: itemId },
  });

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  if (loading) return <div>Loading...</div>;

  console.log(data);

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          defaultValue={data?.item?.name}
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Quantity</label>
        <input
          type="number"
          defaultValue={data?.item?.quantity}
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </div>
      <button type="submit">Update Item</button>
      <button type="submit">Remove Item</button>
      <Link to="/inventory-dashboard">
        <button>Return to Inventories</button>
      </Link>
    </form>
  );
};
export default UpdateItem;
