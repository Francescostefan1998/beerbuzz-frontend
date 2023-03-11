import "./mashWater.css";

const MashWater = () => {
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
              <div> Attenuation</div>
              <div>(%)</div>
            </div>
            <div className="second-line">value</div>
          </div>
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
    </div>
  );
};

export default MashWater;
