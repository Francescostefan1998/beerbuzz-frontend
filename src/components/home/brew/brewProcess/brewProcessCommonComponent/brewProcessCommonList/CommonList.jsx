import "./commonList.css";
import { GiWheat } from "react-icons/gi";

import CommonSingleElement from "../../../ingredients/commonEngredientsModal/commonSingleElement/CommonSingleElement";
const CommonList = ({ icon, colorOrIbu }) => {
  return (
    <div className="commonList">
      <h2>Malts</h2>
      <div>
        <CommonSingleElement icon={icon} colorOrIbu={colorOrIbu} />
        <CommonSingleElement icon={icon} colorOrIbu={colorOrIbu} />
        <CommonSingleElement icon={icon} colorOrIbu={colorOrIbu} />
        <CommonSingleElement icon={icon} colorOrIbu={colorOrIbu} />
        <CommonSingleElement icon={icon} colorOrIbu={colorOrIbu} />
      </div>
    </div>
  );
};

export default CommonList;
