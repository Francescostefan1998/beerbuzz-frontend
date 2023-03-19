import "./mashWater.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBatchVolumeRecipeAction } from "../../../../../redux/actions/recipe";
import { volumeSpargeAction } from "../../../../../redux/actions/spargeWater";
import { updatePreBoilWaterAndBeerAction } from "../../../../../redux/actions/waterAndBeerAction";
import {
  updatePostBoilWaterAndBeerAction,
  updateTotalBoilTimeWaterAndBeerAction,
  updateLostInFilteringWaterAndBeerAction,
  updateEvaporationRateWaterAndBeerAction,
} from "../../../../../redux/actions/waterAndBeerAction";
import { updateMashVolumeWaterAndBeerAction } from "../../../../../redux/actions/waterAndBeerAction";
const MashWater = ({ setRefresh }) => {
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
  const { malts } = useSelector((state) => state.createRecipe.malts);

  const { evaporationRate } = useSelector((state) => state.waterAndBeerData);
  const { preBoil } = useSelector((state) => state.waterAndBeerData);
  const { postBoil } = useSelector((state) => state.waterAndBeerData);
  const { equipmentEfficienty } = useSelector(
    (state) => state.waterAndBeerData
  );
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(initialpHMash);
  }, []);

  const updateTheValues = async (e) => {
    setRefresh(e);
  };
  const changeMashVolume = (e) => {
    let kg = 0;
    if (malts) {
      for (let i = 0; i < malts.lenght; i++) {
        kg += malts[i].quantity;
      }
    }
    dispatch(updateMashVolumeWaterAndBeerAction(parseFloat(e)));
    let preboil = parseFloat(e) + parseFloat(volumeSparge) - kg * 1.3;
    dispatch(updatePreBoilWaterAndBeerAction(preboil));
    let postboil =
      (preboil / 100) * (100 - (evaporationRate * totalBoilTime) / 60);
    dispatch(updatePostBoilWaterAndBeerAction(postboil));

    dispatch(
      addBatchVolumeRecipeAction((postboil / 100) * (100 - lostInfiltering))
    );
  };
  const changeSpargeVolume = (e) => {
    let kg = 0;
    if (malts) {
      for (let i = 0; i < malts.lenght; i++) {
        kg += malts[i].quantity;
      }
    }
    dispatch(volumeSpargeAction(parseFloat(e)));
    let preboil = parseFloat(mashVolume) + parseFloat(e) - kg * 1.3;
    dispatch(updatePreBoilWaterAndBeerAction(preboil));
    let postboil =
      (preboil / 100) * (100 - (evaporationRate * totalBoilTime) / 60);
    dispatch(updatePostBoilWaterAndBeerAction(postboil));

    dispatch(
      addBatchVolumeRecipeAction((postboil / 100) * (100 - lostInfiltering))
    );
  };
  const changePreBoilVolume = (e) => {
    dispatch(updatePreBoilWaterAndBeerAction(parseFloat(e)));
    let postboil =
      (parseFloat(e) / 100) * (100 - (evaporationRate * totalBoilTime) / 60);
    dispatch(updatePostBoilWaterAndBeerAction(postboil));

    dispatch(
      addBatchVolumeRecipeAction((postboil / 100) * (100 - lostInfiltering))
    );
  };
  const changePostBoilVolume = (e) => {
    dispatch(updatePostBoilWaterAndBeerAction(parseFloat(e)));

    dispatch(
      addBatchVolumeRecipeAction(
        (parseFloat(e) / 100) * (100 - lostInfiltering)
      )
    );
  };
  const changeEvaporation = (e) => {
    dispatch(updateEvaporationRateWaterAndBeerAction(parseFloat(e)));
    let postboil =
      (preBoil / 100) * (100 - (parseFloat(e) * totalBoilTime) / 60);
    dispatch(updatePostBoilWaterAndBeerAction(postboil));

    dispatch(
      addBatchVolumeRecipeAction((postboil / 100) * (100 - lostInfiltering))
    );
  };
  const changeFiltering = (e) => {
    dispatch(updateLostInFilteringWaterAndBeerAction(parseFloat(e)));

    dispatch(
      addBatchVolumeRecipeAction((postBoil / 100) * (100 - parseFloat(e)))
    );
  };
  const changeBoilDuration = (e) => {
    dispatch(updateTotalBoilTimeWaterAndBeerAction(parseFloat(e)));

    let postboil =
      (preBoil / 100) * (100 - (evaporationRate * parseFloat(e)) / 60);
    dispatch(updatePostBoilWaterAndBeerAction(postboil));

    dispatch(
      addBatchVolumeRecipeAction((postboil / 100) * (100 - lostInfiltering))
    );
  };
  return (
    <div className="mashWater">
      <div className="mashWater-tab border-right-visible">
        <div className="mashWater-tab-line head">
          <h1>Measured values</h1>
        </div>
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
              onChange={(e) => {
                changeMashVolume(e.target.value);
                updateTheValues(e.target.value);
              }}
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
                finalpHMash !== 0
                  ? finalpHMash
                  : parseFloat(initialpHMash).toFixed(2)
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
              onChange={(e) => {
                changeSpargeVolume(e.target.value);
                updateTheValues(e.target.value);
              }}
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
              <div>Pre Boil Vol.</div>
              <div>L</div>
            </div>
            <input
              type="number"
              className="second-line"
              placeholder={preBoil}
              onChange={(e) => {
                changePreBoilVolume(e.target.value);
                updateTheValues(e.target.value);
              }}
            />
          </div>
          <div className="mashWater-tab-line-cell">
            <div className="first-line">
              <div className="mashWater-tab-line-cell-visible-big-screen">
                Evaporation rate/hr
              </div>
              <div className="mashWater-tab-line-cell-visible-small-screen">
                Ev.rate/hr
              </div>

              <div>(%)</div>
            </div>
            <input
              type="number"
              className="second-line"
              placeholder={evaporationRate}
              onChange={(e) => {
                changeEvaporation(e.target.value);
                updateTheValues(e.target.value);
              }}
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
              placeholder={parseFloat(postBoil).toFixed(2)}
              onChange={(e) => {
                changePostBoilVolume(e.target.value);
                updateTheValues(e.target.value);
              }}
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
              onChange={(e) => {
                changeFiltering(e.target.value);
                updateTheValues(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="mashWater-tab-line">
          <div className="mashWater-tab-line-cell">
            <div className="first-line">
              <div className="mashWater-tab-line-cell-visible-big-screen">
                Equipment Efficiency
              </div>
              <div className="mashWater-tab-line-cell-visible-small-screen">
                Eq. eff.
              </div>

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
              onChange={(e) => {
                changeBoilDuration(e.target.value);
                updateTheValues(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="mashWater-tab border-left-visible">
        <div className="mashWater-tab-line head">
          <h1>Additions</h1>
        </div>
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
