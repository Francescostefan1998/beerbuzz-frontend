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
              <div>{parseFloat(body.abv).toFixed(2)}%</div>
            </div>
            <div className="showRecipeData-overview-inner">
              <div>
                <strong>EBC:</strong>
              </div>
              <div>{parseFloat(body.ebc).toFixed(2)}</div>
            </div>
            <div className="showRecipeData-overview-inner">
              <div>
                <strong>IBU:</strong>
              </div>
              <div>{parseFloat(body.ibu).toFixed(2)}</div>
            </div>
            <div className="showRecipeData-overview-inner">
              <div>
                <strong>OG:</strong>
              </div>
              <div>{parseFloat(body.og).toFixed(2)}</div>
            </div>
            <div className="showRecipeData-overview-inner">
              <div>
                <strong>FG:</strong>
              </div>
              <div>{parseFloat(body.fg).toFixed(2)}</div>
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
              <div>{parseFloat(body.batchVolume).toFixed(2)}L</div>
            </div>
            <div className="showRecipeData-overview-inner">
              <div>
                <strong>Mash Volume:</strong>
              </div>
              <div>{parseFloat(body.mashVolume).toFixed(2)}L</div>
            </div>
            <div className="showRecipeData-overview-inner">
              <div>
                <strong>Sparge Volume:</strong>
              </div>
              <div>200L</div>
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