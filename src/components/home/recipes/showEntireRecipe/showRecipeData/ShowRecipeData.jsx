import "./showRecipeData.css";

const ShowRecipeData = ({ body }) => {
  return (
    <>
      {body && (
        <div className="showRecipeData">
          <div className="showRecipeData-overview sensibleData">
            <div className="showRecipeData-overview-inner">
              <div>
                <strong>ABV:</strong>
              </div>
              <div>{body.abv}%</div>
            </div>
            <div className="showRecipeData-overview-inner">
              <div>
                <strong>EBC:</strong>
              </div>
              <div>{body.ebc}</div>
            </div>
            <div className="showRecipeData-overview-inner">
              <div>
                <strong>IBU:</strong>
              </div>
              <div>{body.ibu}</div>
            </div>
            <div className="showRecipeData-overview-inner">
              <div>
                <strong>OG:</strong>
              </div>
              <div>{body.og}</div>
            </div>
            <div className="showRecipeData-overview-inner">
              <div>
                <strong>FG:</strong>
              </div>
              <div>{body.fg}</div>
            </div>
          </div>
          <div className="showRecipeData-overview water">
            <div className="showRecipeData-overview-inner">
              <div>
                <strong>All grain</strong>
              </div>
              <div></div>
            </div>
            <div className="showRecipeData-overview-inner">
              <div>
                <strong>Batch Volume:</strong>
              </div>
              <div>{body.batchVolume}</div>
            </div>
            <div className="showRecipeData-overview-inner">
              <div>
                <strong>Mash Volume:</strong>
              </div>
              <div>{body.mashVolume}</div>
            </div>
            <div className="showRecipeData-overview-inner">
              <div>
                <strong>Sparge Volume:</strong>
              </div>
              <div>200l</div>
            </div>
            <div className="showRecipeData-overview-inner">
              <div>
                <strong>Equipment Efficiency:</strong>
              </div>
              <div>75%</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowRecipeData;
