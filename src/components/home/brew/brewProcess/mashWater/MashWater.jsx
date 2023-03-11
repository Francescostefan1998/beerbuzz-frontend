import "./mashWater.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const MashWater = () => {
  const { salts } = useSelector((state) => state.createRecipe);
  const { acids } = useSelector((state) => state.createRecipe);
  const { acid } = useSelector((state) => state.sparge);
  const { acidQuantity } = useSelector((state) => state.sparge);
  const { mashVolume } = useSelector((state) => state.waterAndBeerData);
  const finalpHMash = useSelector((state) => state.afterSalt.ph);
  const initialpHMash = useSelector((state) => state.updatedWater.ph);
  const finalpHSparge = useSelector((state) => state.sparge.finalph);
  const volumeSparge = useSelector((state) => state.sparge.volume);
  const { lostInfiltering } = useSelector((state) => state.waterAndBeerData);
  const { totalBoilTime } = useSelector((state) => state.waterAndBeerData);

  const { evaporationRate } = useSelector((state) => state.waterAndBeerData);
  const { preBoil } = useSelector((state) => state.waterAndBeerData);
  const { postBoil } = useSelector((state) => state.waterAndBeerData);
  const { equipmentEfficienty } = useSelector(
    (state) => state.waterAndBeerData
  );
  useEffect(() => {
    console.log(initialpHMash);
  }, []);
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
            <input
              type="number"
              className="second-line"
              placeholder={mashVolume}
            />
          </div>
          <div className="mashWater-tab-line-cell">
            <div className="first-line">
              <div>Mash pH</div>
              <div>pH</div>
            </div>
            <input
              type="number"
              className="second-line"
              placeholder={
                finalpHMash !== 0 ? finalpHMash : initialpHMash.toFixed(2)
              }
            />
          </div>
        </div>
        <div className="mashWater-tab-line">
          <div className="mashWater-tab-line-cell">
            <div className="first-line">
              <div>Sparge Volume</div>
              <div>L</div>
            </div>
            <input
              type="number"
              className="second-line"
              placeholder={volumeSparge}
            />
          </div>
          <div className="mashWater-tab-line-cell">
            <div className="first-line">
              <div>Sparge pH</div>
              <div>pH</div>
            </div>
            <input
              type="number"
              className="second-line"
              placeholder={finalpHSparge}
            />
          </div>
        </div>
        <div className="mashWater-tab-line">
          <div className="mashWater-tab-line-cell">
            <div className="first-line">
              <div>Pre Boil Volume</div>
              <div>L</div>
            </div>
            <input
              type="number"
              className="second-line"
              placeholder={preBoil}
            />
          </div>
          <div className="mashWater-tab-line-cell">
            <div className="first-line">
              <div>Evaporation rate/hr</div>
              <div>(%)</div>
            </div>
            <input
              type="number"
              className="second-line"
              placeholder={evaporationRate}
            />
          </div>
        </div>
        <div className="mashWater-tab-line">
          <div className="mashWater-tab-line-cell">
            <div className="first-line">
              <div>Post Boil Volume</div>
              <div>L</div>
            </div>
            <input
              type="number"
              className="second-line"
              placeholder={postBoil}
            />
          </div>
          <div className="mashWater-tab-line-cell">
            <div className="first-line">
              <div>Filtering Lost</div>
              <div>(%)</div>
            </div>
            <input
              type="number"
              className="second-line"
              placeholder={lostInfiltering}
            />
          </div>
        </div>

        <div className="mashWater-tab-line">
          <div className="mashWater-tab-line-cell">
            <div className="first-line">
              <div>Equipment Efficiency</div>
              <div>(%)</div>
            </div>
            <input
              type="number"
              className="second-line"
              placeholder={equipmentEfficienty}
            />
          </div>
          <div className="mashWater-tab-line-cell">
            <div className="first-line">
              <div>Boil Duration</div>
              <div>min</div>
            </div>
            <input
              type="number"
              className="second-line"
              placeholder={totalBoilTime}
            />
          </div>
        </div>
      </div>
      <div className="mashWater-tab">
        <div className="mashWater-tab-line head">Additions</div>
        <ul>
          <div className="image">
            <img
              src="https://images.theconversation.com/files/179175/original/file-20170721-18110-oqdban.png?ixlib=rb-1.1.0&q=45&auto=format&w=600&h=835&fit=crop&dpr=1"
              alt="molecule"
            />
          </div>
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
