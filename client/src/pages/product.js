import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import background from "../assets/background.jpeg";

// Item Name
// Update Category (input)
// Image (UI)
// quantitycreate/update (buttons)
// delete (button)

export const Product = () => {
  return (
    <div class="ui center aligned container">
      <div class="ui one column divided grid">
        <div class="row">
          <div class="column">
            <h1> ITEM NAME </h1>

            <div class="row">
              <div class="column">
                <div className="ui input focus">
                  <input type="text" placeholder="Item Name"></input>
                </div>
              </div>

              {/*update category  */}
              <div class="row">
                <div class="column">
                  <div className="ui input focus">
                    <input type="text" placeholder="Item Category"></input>
                  </div>
                </div>

                {/* img  */}
                <div class="row">
                  <div class="column">
                    <img
                      class="ui middle aligned small rounded image"
                      src={background}
                    ></img>
                  </div>
                </div>

                {/* quantity  */}
                <div class="row">
                  <div class="column"></div>

                  <div class="ui selection dropdown">
                    <input type="hidden" name="gender"></input>
                    <i class="dropdown icon"></i>
                    <div class="default text"> Quantity </div>
                    <div class="menu">
                      <div class="item" data-value="1">
                        1 item
                      </div>
                      <div class="item" data-value="2">
                        2 items
                        <div class="item" data-value="3">
                          3 item
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* create/update/delete buttons  */}
              <div class="row">
                <div class="column">
                  <div class="ui buttons">
                    <button class="ui button">Cancel</button>
                    <div class="or"></div>
                    <button class="ui positive button active">Save</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
