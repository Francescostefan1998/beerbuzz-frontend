import "./commonSingleElement.css";
import { GiWheat } from "react-icons/gi";
import { useState } from "react";

const CommonSingleElement = ({
  icon,
  colorOrIbu,
  body,
  addProduct,
  subtractProduct,
}) => {
  const [selected, setSelected] = useState(
    "common-element-container-inside-malt-none"
  );
  return (
    <div
      className="common-element-container-inside-malt"
      id={selected}
      onClick={() => {
        selected !== "common-element-container-inside-malt-purple"
          ? setSelected("common-element-container-inside-malt-purple")
          : setSelected("common-element-container-inside-malt-none");
        selected !== "common-element-container-inside-malt-purple"
          ? addProduct(body)
          : subtractProduct(body);
      }}
    >
      <div>{icon}</div>
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
