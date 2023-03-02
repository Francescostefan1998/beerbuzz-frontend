import "./brewProcessCommonTitle.css";
import { FaPen } from "react-icons/fa";
const BrewProcessCommonTitle = ({ select }) => {
  return (
    <div className="brewProcessCommonTitle">
      {select === "mash" ? (
        <div className="brewProcessCommonTitle-main">
          <FaPen className="brewProcessCommonTitle-image-modify" />

          <div className="brewProcessCommonTitle-image">
            <img
              src="https://th.bing.com/th/id/OIP.CaxyTtW5_xdxtnmTND4GeQHaHa?pid=ImgDet&rs=1"
              alt="beer"
            />
          </div>
          <div className="brewProcessCommonTitle-title">
            <div>
              <div className="brewProcessCommonTitle-title-name">Name</div>
              <div className="brewProcessCommonTitle-title-input">
                <input type="text" placeholder="Choose a Name" />
              </div>
            </div>
            <div>
              <div className="brewProcessCommonTitle-title-name">Author</div>
              <div className="brewProcessCommonTitle-title-input">
                <input type="text" placeholder="Your Name" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="brewProcessCommonTitle-main">
          <div className="brewProcessCommonTitle-image">
            <img
              src="https://th.bing.com/th/id/OIP.CaxyTtW5_xdxtnmTND4GeQHaHa?pid=ImgDet&rs=1"
              alt="beer"
            />
          </div>
          <div className="brewProcessCommonTitle-title">
            <div>
              <div className="brewProcessCommonTitle-title-name">Name</div>
              <div className="brewProcessCommonTitle-title-name">Author</div>
            </div>
            <div>
              <div className="brewProcessCommonTitle-title-name">Author</div>
              <div className="brewProcessCommonTitle-title-name">Author</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrewProcessCommonTitle;
