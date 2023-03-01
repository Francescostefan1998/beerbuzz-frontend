import "./waterSourceData.css";
import { RiCloseLine } from "react-icons/ri";
const WaterSourceData = ({ setModal }) => {
  return (
    <div className="waterSouceData">
      <div className="waterSouceData-modal">
        <div className="waterSouceData-modal-top">
          <h4 className="mt-2">Water Souce Data</h4>
          <div
            className="waterSouceData-close"
            onClick={() => setModal("closed")}
          >
            <RiCloseLine className="waterSouceData-close-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterSourceData;
