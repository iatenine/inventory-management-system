import React from "react";
import Default from "../../imgs/default.png";

interface IInventoryCardProps {
  name: string;
  items: Array<any>;
}

const InventoryCard: React.FC<IInventoryCardProps> = (
  props: IInventoryCardProps
) => {
  console.log(props)
  return (
    <div className="ui special cards">
      <div className="card">
        <div className="blurring dimmable image">
          <div className="ui dimmer">
            <div className="content"></div>
          </div>
          <img src={Default} alt={props.name} />
        </div>
        <div className="content">
          <div className="header">{props.name}</div>
          <span className="">Items: {props.items.length}</span>
        </div>
        <div className="extra content">
          <div className="center">
            <button className="ui fluid primary button">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InventoryCard;
