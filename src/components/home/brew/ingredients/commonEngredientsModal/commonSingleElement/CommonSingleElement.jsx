import "./commonSingleElement.css";
import { GiWheat } from "react-icons/gi";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { BsTrashFill } from "react-icons/bs";

const CommonSingleElement = ({
  icon,
  colorOrIbu,
  body,
  addProduct,
  subtractProduct,
  title,
  colorOff,
  refresh,
  addThisProduct,
}) => {
  const [selected, setSelected] = useState(
    "common-element-container-inside-malt-none"
  );
  const { hops } = useSelector((state) => state.recipeIngredient);
  const { malts } = useSelector((state) => state.recipeIngredient);
  const { yeasts } = useSelector((state) => state.recipeIngredient);
  const { others } = useSelector((state) => state.recipeIngredient);
  const verifyIfSelected = (title) => {
    switch (title) {
      case "Fermentable":
        const verifySelection1 = malts.find((malt) => malt._id === body._id);
        setSelected(
          verifySelection1
            ? "common-element-container-inside-malt-purple"
            : "common-element-container-inside-malt-none"
        );
        break;
      case "Hops":
        const verifySelection2 = hops.find((hop) => hop._id === body._id);
        setSelected(
          verifySelection2
            ? "common-element-container-inside-malt-purple"
            : "common-element-container-inside-malt-none"
        );
        break;
      case "Yeasts and Bacterias":
        const verifySelection3 = yeasts.find((yeast) => yeast._id === body._id);
        setSelected(
          verifySelection3
            ? "common-element-container-inside-malt-purple"
            : "common-element-container-inside-malt-none"
        );
        break;
      case "Others":
        const verifySelection4 = others.find((other) => other._id === body._id);
        setSelected(
          verifySelection4
            ? "common-element-container-inside-malt-purple"
            : "common-element-container-inside-malt-none"
        );
        break;
      default:
        setSelected("common-element-container-inside-malt-none");
    }
    addThisProduct(body._id);
  };

  const handleMainClick = () => {
    if (colorOff === "colorOff") {
      setSelected("common-element-container-inside-malt-none");
    }
    if (colorOff === "false") {
      setSelected("common-element-container-inside-malt-none");
    } else {
      selected !== "common-element-container-inside-malt-purple"
        ? setSelected("common-element-container-inside-malt-purple")
        : setSelected("common-element-container-inside-malt-none");
      selected !== "common-element-container-inside-malt-purple"
        ? addProduct({ ...body, quantity: 0 })
        : subtractProduct({ ...body, quantity: 0 });
    }
  };

  useEffect(() => {
    verifyIfSelected(title);
  }, [refresh]);
  return (
    <div
      className="common-element-container-inside-malt"
      id={colorOff !== "colorOff" ? selected : "colorOff"}
      onClick={() => handleMainClick()}
    >
      {colorOff === "colorOff" ? (
        <div className="visible-trash">
          <BsTrashFill
            onClick={() => subtractProduct({ ...body, quantity: 0 })}
          />
        </div>
      ) : (
        <div></div>
      )}
      {colorOff === "colorOff" ? (
        <div className="visible-icon">{icon}</div>
      ) : (
        <div>{icon}</div>
      )}
      <div className="common-element-container-inside-malt-description">
        <div className="common-element-container-inside-malt-description-section">
          <b>{body.name}</b>
        </div>
        <div className="common-element-container-inside-malt-description-section">
          <div>{colorOrIbu}</div>
          <div>-</div>
          {body.potential && <div>{body.potential}</div>}
          {body.alpha && <div>{body.alpha}</div>}
          {body.attenuation && <div>{body.attenuation}</div>}
          <div>-</div>
          <div>{body.type}</div>
        </div>
      </div>
    </div>
  );
};

export default CommonSingleElement;
