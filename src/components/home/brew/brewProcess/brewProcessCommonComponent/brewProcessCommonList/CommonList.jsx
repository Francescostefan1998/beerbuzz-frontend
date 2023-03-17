import "./commonList.css";
import { GiWheat } from "react-icons/gi";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CommonSingleElement from "../../../ingredients/commonEngredientsModal/commonSingleElement/CommonSingleElement";
import { addMaltsRecipeAction } from "../../../../../../redux/actions/recipe";
import { addOthersRecipeAction } from "../../../../../../redux/actions/recipe";
import { addHopsRecipeAction } from "../../../../../../redux/actions/recipe";
import { addYeastsRecipeAction } from "../../../../../../redux/actions/recipe";
const CommonList = ({
  icon,
  colorOrIbu,
  title,
  subtractProduct,
  addProduct,
  refresh,
  colorOff,
  addThisProduct,
}) => {
  const [selectedList, setSelected] = useState();
  const { hops } = useSelector((state) => state.recipeIngredient);
  const { malts } = useSelector((state) => state.recipeIngredient);
  const { yeasts } = useSelector((state) => state.recipeIngredient);
  const { others } = useSelector((state) => state.recipeIngredient);
  const recipeHops = useSelector((state) => state.createRecipe.hops);
  const recipeMalts = useSelector((state) => state.createRecipe.malts);
  const recipeYeasts = useSelector((state) => state.createRecipe.yeasts);

  const dispatch = useDispatch();
  const verifyIfSelected = (title, refresh) => {
    if (refresh === "refresh check page") {
      switch (title) {
        case "Mash":
          if (Array.isArray(recipeMalts) && recipeMalts.length > 0) {
            setSelected(recipeMalts[0]);
          } else {
            setSelected([]);
          }
          break;
        case "Hops":
          if (Array.isArray(recipeHops) && recipeHops.length > 0) {
            setSelected(recipeHops[0]);
          } else {
            setSelected([]);
          }
          break;
        case "Yeasts and Bacteria":
          if (Array.isArray(recipeYeasts) && recipeYeasts.length > 0) {
            setSelected(recipeYeasts[0]);
          } else {
            setSelected([]);
          }
          break;
        default:
          setSelected([]);
      }
    } else {
      switch (title) {
        case "Mash":
          setSelected(recipeMalts[0]);
          break;
        case "Hops":
          setSelected(recipeHops[0]);

          break;
        case "Yeasts and Bacteria":
          setSelected(recipeYeasts[0]);

          break;
        case "Others":
          setSelected(others);

          break;
        default:
          setSelected([]);
      }
    }
  };
  const handleAmountOfminuts = async (body, value) => {
    const index = selectedList.findIndex((product) => product._id === body._id);
    if (index !== -1) {
      const newList = await [...selectedList];
      newList[index] = await { ...selectedList[index], minutsBoil: value };

      await dispatch(addHopsRecipeAction(newList));
      await setSelected(newList);

      addThisProduct(value);
    }
  };

  const handleQuantity = (body, value) => {
    const index = selectedList.findIndex((product) => product._id === body._id);
    if (index !== -1) {
      const newList = [...selectedList];
      newList[index] = { ...selectedList[index], quantity: value };
      switch (title) {
        case "Mash":
          dispatch(addMaltsRecipeAction(newList));
          setSelected(newList);
          console.log(value);
          addThisProduct(value);
          break;
        case "Hops":
          dispatch(addHopsRecipeAction(newList));
          setSelected(newList);

          addThisProduct(value);

          break;
        case "Yeasts and Bacteria":
          dispatch(addYeastsRecipeAction(newList));
          setSelected(newList);

          addThisProduct(value);

          break;
        case "Others":
          dispatch(addOthersRecipeAction(newList));

          break;
        default:
          setSelected([]);
      }
      addThisProduct(body._id);
    }
  };
  useEffect(() => {
    verifyIfSelected(title, refresh);
  }, [refresh, title]);
  return (
    <div className="commonList">
      <div className="commonList-title"></div>
      <div>
        {Array.isArray(selectedList) &&
          selectedList.map((body, i) => (
            <div className="commonList-element">
              {" "}
              <CommonSingleElement
                icon={icon}
                colorOrIbu={colorOrIbu}
                body={body}
                key={body._id}
                colorOff={colorOff}
                addProduct={addProduct}
                subtractProduct={subtractProduct}
                refresh={refresh}
                addThisProduct={addThisProduct}
              />
              <div className="commonList-element-add">
                {colorOff === "colorOff" ? (
                  <input
                    type="number"
                    placeholder="0.000kg"
                    onChange={(e) => handleQuantity(body, e.target.value)}
                  />
                ) : (
                  <div className="commonList-element-dont-add">
                    {body.quantity}
                  </div>
                )}
                kg
              </div>
              {body.alpha && (
                <div className="commonList-element-add">
                  {colorOff === "colorOff" ? (
                    <input
                      type="number"
                      placeholder="0 min"
                      onChange={(e) =>
                        handleAmountOfminuts(body, e.target.value)
                      }
                    />
                  ) : (
                    <div className="commonList-element-dont-add">
                      {body.timeBoil && body.timeBoil}
                    </div>
                  )}
                  boil(time)
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default CommonList;
