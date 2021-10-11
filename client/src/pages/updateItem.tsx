import React, { useState } from "react";
import { QUERY_ITEM } from "../utils/queries";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_ITEM, UPDATE_ITEM } from "../utils/mutations";

export const UpdateItem: React.FC = () => {
  // Use the useParams hook to get the id from the url
  const { itemId } = useParams();
  const [updateItem, {error}] = useMutation(UPDATE_ITEM)
  const [removedItem] = useMutation(DELETE_ITEM)

  const { loading, data } = useQuery(QUERY_ITEM, {
    variables: { _id: itemId },
  });

  const itemss = data
  
  const [formData, setFormData] = useState({
    name: '',
    quantity: 0,
  })

  if (loading) return <div>Loading...</div>;

  
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    const {name , value} = event.target
    setFormData({...formData, [name]: value})
  }

  const removeItem = () => {


    try {
      console.log(itemss)
      const {} = removedItem({
        variables: {_id: itemss.getItem._id}
      })
    
      window.location.assign("/inventory-dashboard")

    } catch (err) {
      console.log(err)
    }


  }

  const handleFormSubmit = (event) => {
      event.preventDefault();

      const stn = formData.quantity
    const stnn = parseInt(stn)
      const { data } = updateItem({
        variables: { _id: itemss.getItem._id, input: {name: formData.name, quantity: stnn}
      }});

      if(error){
        console.log(error)
      }
      console.log(data)

      window.location.assign("/inventory-dashboard")

  }
  

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label style={{color: "white", margin: "10px"}}>Name</label>
        <input
        placeholder={data.getItem.name}
        name="name"
        value={formData.name}
          type="text"
          defaultValue={data?.item?.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label style={{color: "white", margin: "10px"}}>Quantity</label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          placeholder={data.getItem.quantity}
          defaultValue={data?.item?.quantity}
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleFormSubmit}>Update Item</button>
      <button type="submit" onClick={removeItem}>Remove Item</button>
      <Link to="/inventory-dashboard">
        <button>Return to Inventories</button>
      </Link>
    </form>
  );
};
export default UpdateItem;
