import "./commonList.css";
import { GiWheat } from "react-icons/gi";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import CommonSingleElement from "../../../ingredients/commonEngredientsModal/commonSingleElement/CommonSingleElement";
const CommonList = ({ icon, colorOrIbu, title }) => {
  const [selectedList, setSelected] = useState([]);
  const { hops } = useSelector((state) => state.recipeIngredient);
  const { malts } = useSelector((state) => state.recipeIngredient);
  const { yeasts } = useSelector((state) => state.recipeIngredient);
  const { others } = useSelector((state) => state.recipeIngredient);
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
  useEffect(() => {
    verifyIfSelected(title);
  }, []);
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
            />
            <div className="commonList-element-add">
              <input type="text" placeholder="0.000kg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonList;
