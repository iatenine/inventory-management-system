import React, {useState} from "react";
import { useMutation } from "@apollo/client";
import { CREATE_INVENTORY, CREATE_ITEM } from "../utils/mutations";
import Auth from "../utils/auth";
import { create } from "domain";

export const AddInventory: React.FC = () => {

  const profile: any = Auth.getProfile()
  console.log(profile.data._id)


  const [name, setName] = useState("")
  const [createInventory, {error}] = useMutation(CREATE_INVENTORY)


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const {data} = await createInventory({
        variables: {inventoryId: profile.data._id, input: {name}}
      })

      if(error){
        console.log(error)
      }

      window.location.assign('/inventory-dashboard')

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form style={{margin: "20px"}}onSubmit={handleFormSubmit}>
      <div className="">
        <input 
          value={name}
          type="text"

          id="inventoryName"
          placeholder="Inventory Name"
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="">
        <button style={{margin: "10px"}} className="ui primary button">Add Inventory</button>
      </div>
    </form>
  );
};

export default AddInventory;
