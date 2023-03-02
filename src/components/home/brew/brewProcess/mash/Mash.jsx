import "./mash.css";
import NavBar from "../../../navBar/NavBar";
import BrewProcessCommonTitle from "../brewProcessCommonComponent/brewProcessCommonTitle/brewProcessCommonTitle";
const Mash = () => {
  return (
    <div className="mash">
      <NavBar />
      <BrewProcessCommonTitle select={"mash"} />
    </div>
  );
};

export default Mash;
