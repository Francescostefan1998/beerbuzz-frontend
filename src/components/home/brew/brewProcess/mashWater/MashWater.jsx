import "./mashWater.css";

const MashWater = () => {
  return (
    <div className="mashWater">
      <div className="mashWater-tab">
        <div className="mashWater-tab-line head">Measured values</div>
        <div className="mashWater-tab-line">
          <div>Mash Volume</div>
          <div>Mash pH</div>
        </div>
        <div className="mashWater-tab-line">
          <div>Sparge Volume</div>
          <div>Sparge pH</div>
        </div>
        <div className="mashWater-tab-line">
          <div>Pre Boil Volume</div>
          <div>Evaporation rate/hr</div>
        </div>
        <div className="mashWater-tab-line">
          <div>Post Boil Volume</div>
          <div>Filtering Lost</div>
        </div>

        <div className="mashWater-tab-line">
          <div>Equipment Efficiency</div>
          <div></div>
        </div>
      </div>
      <div className="mashWater-tab">
        <div className="mashWater-tab-line head">Additions</div>
        <div className="mashWater-tab-line">
          <div>Salt</div>
          <div></div>
        </div>
        <div className="mashWater-tab-line">
          <div>Acid</div>
          <div></div>
        </div>
        <div className="mashWater-tab-line">
          <div></div>
          <div></div>
        </div>
        <div className="mashWater-tab-line">
          <div></div>
          <div></div>
        </div>

        <div className="mashWater-tab-line">
          <div>Equipment Efficiency</div>
          <div></div>
        </div>
      </div>
      <div className="mashWater-tab">animation</div>
    </div>
  );
};

export default MashWater;
