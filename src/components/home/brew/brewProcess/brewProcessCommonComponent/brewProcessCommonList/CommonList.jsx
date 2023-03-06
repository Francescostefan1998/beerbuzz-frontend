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
}) => {
  const [selectedList, setSelected] = useState([]);
  const { hops } = useSelector((state) => state.recipeIngredient);
  const { malts } = useSelector((state) => state.recipeIngredient);
  const { yeasts } = useSelector((state) => state.recipeIngredient);
  const { others } = useSelector((state) => state.recipeIngredient);
  const dispatch = useDispatch();
  const verifyIfSelected = (title) => {
    switch (title) {
      case "Mash":
        setSelected(malts);
        break;
      case "Hops":
        setSelected(hops);

        break;
      case "Yeasts and Bacteria":
        setSelected(yeasts);

        break;
      case "Others":
        setSelected(others);

        break;
      default:
        setSelected([]);
    }
  };

  const handleQuantity = async (body, value) => {
    const index = selectedList.findIndex((product) => product._id === body._id);
    if (index !== -1) {
      const newList = [...selectedList];
      newList[index] = { ...selectedList[index], quantity: value };
      setSelected(newList);
      switch (title) {
        case "Mash":
          dispatch(addMaltsRecipeAction(newList));
          break;
        case "Hops":
          dispatch(addHopsRecipeAction(newList));

          break;
        case "Yeasts and Bacteria":
          dispatch(addYeastsRecipeAction(newList));

          break;
        case "Others":
          dispatch(addOthersRecipeAction(newList));

          break;
        default:
          setSelected([]);
      }
    }
  };
  useEffect(() => {
    verifyIfSelected(title);
  }, [refresh]);
  return (
    <div className="commonList">
      <div className="commonList-title">
        <h2>{title}</h2>
        <div>Kg</div>
      </div>
      <div>
        {selectedList.map((body, i) => (
          <div className="commonList-element">
            {" "}
            <CommonSingleElement
              icon={icon}
              colorOrIbu={colorOrIbu}
              body={body}
              key={body._id}
              colorOff={"colorOff"}
              addProduct={addProduct}
              subtractProduct={subtractProduct}
            />
            <div className="commonList-element-add">
              <input
                type="number"
                placeholder="0.000kg"
                onChange={(e) => handleQuantity(body, e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonList;
