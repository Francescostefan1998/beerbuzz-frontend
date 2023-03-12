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
}) => {
  const [listProducts, setListProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(false);
  const [newIngredient, setNewIngredient] = useState({
    name: "",
  });
  const [add, setAdd] = useState(false);

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
    const res = await fetch(
      `http://localhost:3001/${fetchProp}?name=${search}`
    );
    const data = await res.json();
    await setListProducts(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchProducts(fetchProps, search);
  }, [fetchProps]);

  const onchangeHandler = async (e) => {
    await setSearch(e);
    await fetchProducts(fetchProps, search);
  };
  const postProducts = async (fetchProps, newIngredient) => {
    const res = await fetch(`http://localhost:3001/${fetchProps}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newIngredient),
    });
    const data = await res.json();
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
      case "Yeasts and Bacterias":
        dispatch(addYeastsRecipeAction(yeasts));

        break;
      case "Others":
        dispatch(addYeastsRecipeAction(others));

        break;
      default:
    }
  };

  return (
    <div className="common-selection-bigger-container common-ingredients-container">
      <div className="common-ingredients-container-inside">
        <div className="common-ingredients-container-inside-section-top">
          {!add && (
            <div className="common-ingredients-container-inside-title">
              Select {title}
            </div>
          )}
          {add && (
            <div className="common-ingredients-container-inside-title">
              Add {title}
            </div>
          )}
          <div className="common-ingredients-container-inside-icons">
            <div
              className="malts-container-inside-section-bottom-add"
              onClick={() => {
                add !== false ? setAdd(false) : setAdd(true);
              }}
            >
              {!add && <div>+ Add a new {title}</div>}
              {add && icon}
            </div>
          </div>
        </div>
        {!add && (
          <div className="common-ingredients-container-inside-section-middle">
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
            {listProducts.map((product, i) => (
              <CommonSingleElement
                icon={icon}
                colorOrIbu={colorOrIbu}
                key={product._id}
                body={product}
                addProduct={addProduct}
                subtractProduct={subtractProduct}
                title={title}
                addThisProduct={addThisProduct}
              />
            ))}
          </div>
        )}
        {add && (
          <AddProduct
            colorOrIbu={colorOrIbu}
            fetchProp={fetchProps}
            setNewIngredient={addNewField}
          />
        )}

        <div className="common-ingredients-container-inside-section-bottom">
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
                postProducts(fetchProps, newIngredient);
                add !== false ? setAdd(false) : setAdd(true);
              }}
            >
              Save
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommonEngredientsModal;
