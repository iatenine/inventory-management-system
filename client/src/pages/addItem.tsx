import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_ITEM } from "../utils/mutations"

export const AddItem: React.FC = () => {
  const { inventoryId } = useParams();
  const [formInputSubmit, setFormInputSubmit] = useState({ name: '', quantity: '' })
  const [addItem, {error}] = useMutation(CREATE_ITEM)

  const handleInputChange = (event) => {
      const {name, quantity} = event.target
      setFormInputSubmit({...formInputSubmit, [name] : quantity})
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const {data} = await addItem({
        variables: {inventoryId: inventoryId, ...formInputSubmit}
      });

      if(error){
        console.log(error)
      }
      console.log(data)

      if(!data){
        throw new Error('something went wrong!')
      }

      window.location.assign(`/inventory/${inventoryId}`)

    } catch (err) {
      console.error(err)
    }



  }


  return (
    <form onSubmit={handleFormSubmit}>
      <div className="">
        <input type="text" className="" value={formInputSubmit.name} name="name" placeholder="Add Item Name" onChange={handleInputChange} />
        <input type="number" className="" value={formInputSubmit.quantity} name="quantity" placeholder="Add Item Quantity" onChange={handleInputChange} />
      </div>
      <div className="">
        <button className="ui primary button">Add item</button>
      </div>
    </form>
  );
};

export default AddItem;

