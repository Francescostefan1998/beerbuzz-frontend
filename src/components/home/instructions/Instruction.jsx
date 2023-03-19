import React from "react";
import "../recipes/recipesList/recipesList.css";

import "./instruction.css";
import SideBarLeft from "../brew/sideBarLeft/SideBarLeft";
import NavBar from "../../home/navBar/NavBar";
import { useNavigate } from "react-router-dom";

const Instruction = () => {
  const navigate = useNavigate();
  return (
    <div className="instruction">
      <NavBar />
      <div className="selectStyle-sideBar-left">
        <SideBarLeft title={"S"} subtitle={"r"} />
      </div>
      <div className="common-selection-bigger-container">
        <div className="showEnt-recipe-title instruction-inner">
          <h1>Welcome to BeerBuzz! </h1>
        </div>
        <div className="recipesList-list">
          <div className="instruction-inner-description">
            <h2>What is BeerBuzz?</h2>
            <p>
              BeerBuzz is our calculator for beer, designed to help brewers have
              more control over the production or design of new beer. Through
              accurate calculations, it provides you with indicative technical
              results for your beer. You can monitor the profile of your water
              and how it changes with the addition of salts and acids, monitor
              the volume of your batch, the quantity and details of your raw
              materials, the original and final gravity of your beer, and the
              bitterness and alcohol content.
            </p>
            <h2> How to use BeerBuzz?</h2>
            <p>
              {" "}
              Here is a short guideline to using our app in the best way
              possible in order to help you make the best beer possible!{" "}
            </p>
            Some hints to use our app:
            <ul>
              <li>
                Follow the process, starting from selecting the style and going
                all the way through the process until the recipe is complete.
              </li>
              <li>
                {" "}
                You can always go back and change input data, but be aware that
                proceeding in the order suggested makes the process easier to
                monitor.
              </li>
              <li>
                You can skip processes you don’t consider necessary. The
                calculator will simply not consider that part, setting the value
                of that field as 0 or as a default value if it is a general
                value like pH, etc.
              </li>
              <li>
                Pay attention when you choose a product! On the left side, you
                can see who the creator of that product is. We guarantee only
                the products with our name.
              </li>
              <li>
                When you select the ingredients needed for your beer, if you
                don’t find exactly the product you are looking for, you can
                create a new product and add it to the product list.
              </li>
              <li>
                When you save the recipe, all your data will be saved, and you
                can find the recipe in your recipe list. From there, you can
                select and check the saved data.
              </li>
              <li>
                You can modify an existing recipe just by adding notes or
                comments.
              </li>
              <li>
                {" "}
                Each recipe can also be added to favorites or even deleted from
                your list if you find it necessary.
              </li>
            </ul>
            <h2>Need help?</h2>
            For any questions, feel free to contact us from our contact page.
            One of our assistants will be happy to help you as soon as possible.
          </div>
        </div>
        <div className="bottomBar-list-proceed invisible-in-small-screen">
          <div
            className="bottomBar-list-proceed-button"
            onClick={() => navigate("/home")}
          >
            Back
          </div>
          <div
            className="bottomBar-list-proceed-button"
            onClick={() => navigate("/home")}
          >
            Proceed
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruction;
