import "./commonList.css";
import { GiWheat } from "react-icons/gi";

import CommonSingleElement from "../../../ingredients/commonEngredientsModal/commonSingleElement/CommonSingleElement";
const CommonList = ({ icon, colorOrIbu, title }) => {
  return (
    <div className="commonList">
      <div className="commonList-title">
        <h2>{title}</h2>
        <div>Kg</div>
      </div>
      <div>
        <div className="commonList-element">
          {" "}
          <CommonSingleElement icon={icon} colorOrIbu={colorOrIbu} />
          <div className="commonList-element-add">
            <input type="text" placeholder="0.000kg" />
          </div>
        </div>
        <div className="commonList-element">
          <CommonSingleElement icon={icon} colorOrIbu={colorOrIbu} />
          <div className="commonList-element-add">
            <input type="text" placeholder="0.000kg" />
          </div>
        </div>
        <div className="commonList-element">
          <CommonSingleElement icon={icon} colorOrIbu={colorOrIbu} />
          <div className="commonList-element-add">
            <input type="text" placeholder="0.000kg" />
          </div>
        </div>
        <div className="commonList-element">
          <CommonSingleElement icon={icon} colorOrIbu={colorOrIbu} />
          <div className="commonList-element-add">
            <input type="text" placeholder="0.000kg" />
          </div>
        </div>
        <div className="commonList-element">
          <CommonSingleElement icon={icon} colorOrIbu={colorOrIbu} />
          <div className="commonList-element-add">
            <input type="text" placeholder="0.000kg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonList;
