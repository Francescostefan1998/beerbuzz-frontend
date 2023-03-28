import React from "react";

import "./commonEngredientsModal.css";
import NavbarIngredients from "../navbarIngredients/NavbarIngredients";
import { GiWheat } from "react-icons/gi";
import { HiSearch } from "react-icons/hi";
import CommonSingleElement from "./commonSingleElement/CommonSingleElement";
import { useState } from "react";
import AddProduct from "./addProduct/AddProduct";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addMaltsRecipeAction } from "../../../../../redux/actions/recipe";
import { addHopsRecipeAction } from "../../../../../redux/actions/recipe";
import { addYeastsRecipeAction } from "../../../../../redux/actions/recipe";
import { addOthersRecipeAction } from "../../../../../redux/actions/recipe";
import { IoMdAdd } from "react-icons/io";
import BottomBar from "../../../../bottomBar/BottomBar";
const CommonEngredientsModal = ({
  title,
  icon,
  colorOrIbu,
  next,
  fetchProps,
  addProduct,
  subtractProduct,
  addThisProduct,
  previous,
  creator,
}) => {
  const url = process.env.REACT_APP_BE_URL;
  const userId = localStorage.getItem("userId");
  const [listProducts, setListProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(false);
  const [newIngredient, setNewIngredient] = useState({
    name: "",
    creator: localStorage.getItem("userId"),
  });
  const [add, setAdd] = useState(false);
  const [showModalRequest, setShowLittleModalForRequest] = useState(false);
  const { hops } = useSelector((state) => state.recipeIngredient);
  const { malts } = useSelector((state) => state.recipeIngredient);
  const { yeasts } = useSelector((state) => state.recipeIngredient);
  const { others } = useSelector((state) => state.recipeIngredient);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addNewField = async (field, value) => {
    setNewIngredient({ ...newIngredient, [field]: value });
    console.log(newIngredient);
  };

  const fetchProducts = async (fetchProp, search) => {
    const res = await fetch(`${url}/${fetchProp}?name=${search}`);
    const data = await res.json();
    setListProducts(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchProducts(fetchProps, search);
  }, [fetchProps]);

  const onchangeHandler = async (e) => {
    setSearch(e);
    await fetchProducts(fetchProps, search);
  };
  const authorizePost = (fetchProps, newIngredient) => {
    setShowLittleModalForRequest(true);
  };
  const postProducts = async (fetchProps, newIngredient, no) => {
    if (no && no === "no") {
      const res = await fetch(`${url}/${fetchProps}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...newIngredient, pubblic: no }),
      });
      setShowLittleModalForRequest(false);

      add !== false ? setAdd(false) : setAdd(true);
      const data = await res.json();
    } else {
      const res = await fetch(`${url}/${fetchProps}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newIngredient),
      });
      setShowLittleModalForRequest(false);

      add !== false ? setAdd(false) : setAdd(true);
      const data = await res.json();
    }
  };
  const setRefreshStatus = () => {
    if (!status) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };
  const saveSelected = async (title) => {
    await setRefreshStatus();
    switch (title) {
      case "Fermentable":
        dispatch(addMaltsRecipeAction(malts));
        break;
      case "Hops":
        dispatch(addHopsRecipeAction(hops));

        break;
      case "Yeasts and Bacteria":
        dispatch(addYeastsRecipeAction(yeasts));

        break;
      case "Others":
        dispatch(addYeastsRecipeAction(others));

        break;
      default:
    }
  };

  return (
    <>
      {showModalRequest && (
        <div
          className="showModalRequest"
          onClick={() => setShowLittleModalForRequest(false)}
        >
          <div className="showModalRequest-inner">
            <div>Would you like to pubblish this product?</div>
            <div className="showModalRequest-inner-flex">
              <button
                onClick={() => {
                  postProducts(fetchProps, newIngredient, "no");
                }}
              >
                Keep it private
              </button>
              <button
                onClick={() => postProducts(fetchProps, newIngredient, "yes")}
              >
                Make it public
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="common-ingredients-container-inside-section-top invisible-in-big-screen">
        {!add && (
          <div className="common-ingredients-container-inside-title">
            <h2>Select {title}</h2>
          </div>
        )}
        {add && (
          <div className="common-ingredients-container-inside-title">
            <h2>Add {title}</h2>
          </div>
        )}
      </div>
      <div className="common-ingredients-container-inside-search-outerContainer invisible-in-big-screen">
        {" "}
        <div className="common-ingredients-container-inside-search">
          <div>
            <HiSearch />
          </div>
          <div className="common-ingredients-container-inside-search-input">
            <input
              type="text"
              placeholder="Search the product you need"
              onChange={(e) => onchangeHandler(e.target.value)}
            />
          </div>
        </div>
        <div className="common-ingredients-container-inside-icons">
          <div
            className="malts-container-inside-section-bottom-add"
            onClick={() => {
              add !== false ? setAdd(false) : setAdd(true);
            }}
          >
            {!add && (
              <div className="make-appear-just-on-hover">
                <IoMdAdd className="commonList-make-appear-just-on-hover-icon" />
                <span className="add-appear-just-on-hover">
                  Add a new {title}
                </span>
              </div>
            )}
            {add && icon}
          </div>
        </div>
      </div>
      <div className="common-selection-bigger-container common-ingredients-container">
        <div className="common-ingredients-container-inside-section-top invisible-in-small-screen">
          {!add && (
            <div className="common-ingredients-container-inside-title">
              <h2>Select {title}</h2>
            </div>
          )}
          {add && (
            <div className="common-ingredients-container-inside-title">
              <h2>Add {title}</h2>
            </div>
          )}
        </div>
        <div className="common-ingredients-container-inside-search-outerContainer invisible-in-small-screen">
          {" "}
          <div className="common-ingredients-container-inside-search">
            <div>
              <HiSearch />
            </div>
            <div className="common-ingredients-container-inside-search-input">
              <input
                type="text"
                placeholder="Search the product you need"
                onChange={(e) => onchangeHandler(e.target.value)}
              />
            </div>
          </div>
          <div className="common-ingredients-container-inside-icons">
            <div
              className="malts-container-inside-section-bottom-add"
              onClick={() => {
                add !== false ? setAdd(false) : setAdd(true);
              }}
            >
              {!add && (
                <div className="make-appear-just-on-hover">
                  <IoMdAdd className="commonList-make-appear-just-on-hover-icon" />
                  <span className="add-appear-just-on-hover">
                    Add a new {title}
                  </span>
                </div>
              )}
              {add && icon}
            </div>
          </div>
        </div>
        <div className="common-ingredients-container-inside">
          {!add && (
            <div className="common-ingredients-container-inside-section-middle">
              {loading && (
                <div class="loading-spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              )}
              {listProducts.map((product, i) =>
                product.pubblic &&
                product.pubblic === "no" &&
                product.creator !== userId ? (
                  ""
                ) : (
                  <CommonSingleElement
                    icon={icon}
                    colorOrIbu={colorOrIbu}
                    key={product._id}
                    body={product}
                    addProduct={addProduct}
                    subtractProduct={subtractProduct}
                    title={title}
                    addThisProduct={addThisProduct}
                    creator={creator}
                  />
                )
              )}
            </div>
          )}
          {add && (
            <AddProduct
              colorOrIbu={colorOrIbu}
              fetchProp={fetchProps}
              setNewIngredient={addNewField}
            />
          )}
        </div>
        <div className="common-ingredients-container-inside-section-bottom ">
          {!add && (
            <>
              <div
                className="button"
                onClick={() => {
                  add !== false ? setAdd(false) : setAdd(true);
                  navigate(previous);
                  saveSelected(title);
                }}
              >
                Back
              </div>
              <div
                className="button"
                onClick={() => {
                  add !== false ? setAdd(false) : setAdd(true);
                  navigate(next);
                  saveSelected(title);
                }}
              >
                Save and Proceed
              </div>
            </>
          )}
          {add && (
            <div
              className="button"
              onClick={() => {
                add !== false ? setAdd(false) : setAdd(true);
              }}
            >
              Cancel
            </div>
          )}
          {add && (
            <div
              className="button"
              onClick={(e) => {
                authorizePost(fetchProps, newIngredient);
              }}
            >
              Save
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CommonEngredientsModal;
