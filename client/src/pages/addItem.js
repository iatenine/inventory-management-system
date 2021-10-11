import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_ITEM } from "../utils/mutations"

export const AddItem = () => {
  const { inventoryId } = useParams();
  const [formInputSubmit, setFormInputSubmit] = useState({ name: '', quantity: "" })
  const [createItem, {error}] = useMutation(CREATE_ITEM)

  const handleInputChange = (event) => {
      const {name, value} = event.target
      setFormInputSubmit({...formInputSubmit, [name] : value})
  }
    const stn = formInputSubmit.quantity
    stn.ParseInt()
    console.log(stn)

  console.log(formInputSubmit)
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log({formInputSubmit})
      const {data} = await createItem({
        
        variables: { inventoryId: inventoryId, input: {name: formInputSubmit.name,}
      }});

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
        <input value={formInputSubmit.quantity} name="quantity" placeholder="Add Item Quantity" onChange={handleInputChange} />
      </div>
      <div className="">
        <button className="ui primary button">Add item</button>
      </div>
    </form>
  );
};

export default AddItem;

