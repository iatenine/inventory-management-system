import React from "react";
import Default from "../../imgs/default.png";
import { Link } from "react-router-dom";

interface ICardProps {
  name: string;
  quantity: number;
  categories: string[];
  _id: number | string;
}

const Cards: React.FC<ICardProps> = (props: ICardProps) => {
  console.log(props);
  return (
    <div className="ui special cards">
      <div className="card">
        <div className="blurring dimmable image">
          <div className="ui dimmer">
            <div className="content"></div>
          </div>
          <img src={Default} alt="|ITEM NAME HERE|" />
        </div>
        <div className="content">
          <div className="header">{props.name}</div>
          <div className="meta">
            <span className="extra content">Quantity: {props.quantity}</span>
          </div>
        </div>
        <div className="extra content">
          <div className="center">
            <Link to={`/update-item/${props._id}`}>
              <button className="ui fluid primary button">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

