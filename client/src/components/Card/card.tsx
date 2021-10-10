import React from "react";
import Default from "../../imgs/default.png";

interface ICardProps {
  name: string;
  quantity: number;
  categories: string[];
}

const Cards: React.FC<ICardProps> = (props: ICardProps) => {
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
          <span>Categories</span>
          <p>
            {props.categories.map((category: string, index: number) => {
              return (
                <span key={category}>
                  {category}
                  {index !== props.categories.length - 1 ? ", " : ""}
                </span>
              );
            })}
          </p>
          <div className="center">
            <input
              type="text"
              className="ui fluid"
              placeholder="Add Category"
            />
            <button className="ui fluid primary button">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
