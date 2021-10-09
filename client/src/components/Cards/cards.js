import React from "react";
import Default from "../../imgs/default.png";

const Cards = () => {
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
          <div className="header">|ITEM NAME HERE|</div>
          <div className="meta">
            <span className="extra content">|ITEM QUANTITY HERE|</span>
          </div>
        </div>
        <div className="extra content">
          <p>
            <em data-emoji="arrow_forward"></em>
            |ITEM CATAGORIES HERE|
          </p>
          <div className="center">
            <button type="submit" className="ui fluid primary button">
              Edit |ITEM NAME HERE|
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
