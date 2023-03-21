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
  creator,
}) => {
  const [selected, setSelected] = useState(
    "common-element-container-inside-malt-none"
  );
  const { hops } = useSelector((state) => state.recipeIngredient);
  const { malts } = useSelector((state) => state.recipeIngredient);
  const { yeasts } = useSelector((state) => state.recipeIngredient);
  const { others } = useSelector((state) => state.recipeIngredient);
  const [startX, setStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsSwiping(false);
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    if (Math.abs(diffX) > 50) {
      // check if user has swiped enough
      setIsSwiping(true);
    }
  };

  const handleTouchEnd = () => {
    if (isSwiping) {
      subtractProduct({ ...body, quantity: 0 });
    }
    setIsSwiping(false);
  };

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
      return;
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
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
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
      {/*colorOff === "colorOff" ? (
        <div className="visible-icon">{icon}</div>
      ) : (
        <div>{icon}</div>
      )*/}
      <div className="common-element-container-inside-malt-description">
        <div className="common-element-container-inside-malt-description-section">
          <h6>
            <b>{body.name}</b>
          </h6>
        </div>
        <div className="common-element-container-inside-malt-description-section">
          <div>
            {colorOrIbu}
            {body.color && body.color}
            {body.cellsPerGram && body.cellsPerGram}
          </div>
          <div>-</div>
          {body.yield && <div>yeld:{body.yield}%</div>}
          {body.alpha && <div>alpha:{body.alpha}%</div>}
          {body.attenuation && <div>att:{body.attenuation}%</div>}
          <div>-</div>
          {body.potential && <div>p:{body.potential}</div>}
          {body.attenuation && <div>Abv:{body.maxAbv}%</div>}
          <div>-</div>
          <div>{body.type}</div>
        </div>
      </div>
      {creator && creator === "creator" ? (
        <div className="creator-of-product">
          {!body.creator && "BeerBuzz"}
          {body.creator && body.creator === localStorage.getItem("userId")
            ? "me"
            : body.creator && "User"}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CommonSingleElement;
