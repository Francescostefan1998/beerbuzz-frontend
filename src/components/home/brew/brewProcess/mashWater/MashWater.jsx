import "./mashWater.css";
import { useSelector } from "react-redux";
const MashWater = () => {
  const { salts } = useSelector((state) => state.createRecipe);
  const { acids } = useSelector((state) => state.createRecipe);
  const { acid } = useSelector((state) => state.sparge);
  const { acidQuantity } = useSelector((state) => state.sparge);
  const { mashVolume } = useSelector((state) => state.createRecipe);
  const finalpHMash = useSelector((state) => state.afterSalts.ph);
  const initialpHMash = useSelector((state) => state.createRecipe.ph);
  const finalpHSparge = useSelector((state) => state.sparge.finalph);
  const volumeSparge = useSelector((state) => state.sparge.volume);
  const { lostInFiltering } = useSelector((state) => state.waterAndBeerData);

  return (
    <div className="mashWater">
      <div className="mashWater-tab">
        <div className="mashWater-tab-line head">Measured values</div>
        <div className="mashWater-tab-line">
          <div className="mashWater-tab-line-cell">
            <div className="first-line">
              <div>Mash Volume</div>
              <div>L</div>
            </div>
            <div className="second-line">value</div>
          </div>
          <div className="mashWater-tab-line-cell">
            <div className="first-line">
              <div>Mash pH</div>
              <div>pH</div>
            </div>
            <div className="second-line">value</div>
          </div>
        </div>
        <div className="mashWater-tab-line">
          <div className="mashWater-tab-line-cell">
            <div className="first-line">
              <div>Sparge Volume</div>
              <div>L</div>
            </div>
            <div className="second-line">value</div>
          </div>
          <div className="mashWater-tab-line-cell">
            <div className="first-line">
              <div>Sparge pH</div>
              <div>pH</div>
            </div>
            <div className="second-line">value</div>
          </div>
        </div>
        <div className="mashWater-tab-line">
          <div className="mashWater-tab-line-cell">
            <div className="first-line">
              <div>Pre Boil Volume</div>
              <div>L</div>
            </div>
            <div className="second-line">value</div>
          </div>
          <div className="mashWater-tab-line-cell">
            <div className="first-line">
              <div>Evaporation rate/hr</div>
              <div>(%)</div>
            </div>
            <div className="second-line">value</div>
          </div>
        </div>
        <div className="mashWater-tab-line">
          <div className="mashWater-tab-line-cell">
            <div className="first-line">
              <div>Post Boil Volume</div>
              <div>L</div>
            </div>
            <div className="second-line">value</div>
          </div>
          <div className="mashWater-tab-line-cell">
            <div className="first-line">
              <div>Filtering Lost</div>
              <div>(%)</div>
            </div>
            <div className="second-line">value</div>
          </div>
        </div>

        <div className="mashWater-tab-line">
          <div className="mashWater-tab-line-cell">
            <div className="first-line">
              <div>Equipment Efficiency</div>
              <div>(%)</div>
            </div>
            <div className="second-line">value</div>
          </div>
          <div className="mashWater-tab-line-cell">
            <div className="first-line">
              <div>Boil Duration</div>
              <div>min</div>
            </div>
            <div className="second-line">value</div>
          </div>
        </div>
      </div>
      <div className="mashWater-tab">
        <div className="mashWater-tab-line head">Additions</div>
        <ul>
          {salts.map((salt, i) => (
            <li key={salt.name}>
              {salt.name}: {salt.quantity}g{"  to mash"}
            </li>
          ))}
          {acids.map((acid, i) => (
            <li key={acid.name}>
              {acid.name}: {acid.quantity}ml{"  to mash"}
            </li>
          ))}
          <li>
            {acid}: {acidQuantity}ml{"  to sparge"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MashWater;
