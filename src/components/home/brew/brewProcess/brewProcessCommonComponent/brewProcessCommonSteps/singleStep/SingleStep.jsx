import "../commonBrewStep.css";
import { BsTrashFill } from "react-icons/bs";
import { FaSave } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";

const SingleStep = () => {
  return (
    <div className="commonBrewStep-others-single mt-5">
      <div>
        {" "}
        <BsTrashFill className="commonBrewStep-others-single-icon" />
      </div>

      <div className="commonBrewStep-others-single-grow1">
        <div className="none">Name</div>
        <div>Mash in</div>
      </div>
      <div className="commonBrewStep-others-single-grow1">
        <div className="none">Step duration (minuts)</div>
        <div>60 min</div>
      </div>
      <div className="commonBrewStep-others-single-grow1">
        <div className="none">Temperature (C)</div>
        <div>60 C</div>
      </div>
      <div className="commonBrewStep-others-single-grow1">
        <div className="none">Description</div>

        <div className="none">
          this beer is amzing, please note to add some cheese in it
        </div>
      </div>
      <div>
        {" "}
        <MdAddCircle className="commonBrewStep-others-single-icon" />
      </div>
      <div className="commonBrewStep-others-nonebig">
        this beer is amzing, please note to add some cheese in it
      </div>
    </div>
  );
};

export default SingleStep;
