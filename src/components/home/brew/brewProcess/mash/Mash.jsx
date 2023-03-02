import "./mash.css";
import NavBar from "../../../navBar/NavBar";
import BrewProcessCommonTitle from "../brewProcessCommonComponent/brewProcessCommonTitle/brewProcessCommonTitle";
import ValueObtaining from "../brewProcessCommonComponent/valueObtaining/ValueObtaining";
import ValueSuggested from "../brewProcessCommonComponent/valueSuggested/ValueSuggested";
import CommonList from "../brewProcessCommonComponent/brewProcessCommonList/CommonList";
import { GiWheat } from "react-icons/gi";

const Mash = () => {
  return (
    <div className="mash">
      <NavBar />
      <div className="mash-top-section">
        <div className="mash-top-section-left">
          <BrewProcessCommonTitle select={"mash"} />
        </div>
        <div className="mash-top-section-right">
          <ValueObtaining />
          <ValueSuggested />
        </div>
      </div>
      <div className="mash-main-section">
        <div>
          <h1>Mash</h1>
          <CommonList icon={<GiWheat />} colorOrIbu={"Color (EBC)"} />
        </div>
        <div>
          <h1>Process</h1>
          steps
        </div>
      </div>
    </div>
  );
};

export default Mash;
