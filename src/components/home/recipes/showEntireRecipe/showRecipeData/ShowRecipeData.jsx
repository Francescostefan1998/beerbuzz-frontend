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
              <div>
                {body.abv && !isNaN(body.abv)
                  ? parseFloat(body.abv).toFixed(2)
                  : 0}
                %
              </div>
            </div>
            <div className="showRecipeData-overview-inner">
              <div>
                <strong>EBC:</strong>
              </div>
              <div>
                {body.ebc && !isNaN(body.ebc)
                  ? parseFloat(body.ebc).toFixed(2)
                  : 0}
              </div>
            </div>
            <div className="showRecipeData-overview-inner">
              <div>
                <strong>IBU:</strong>
              </div>
              <div>
                {body.ibu && !isNaN(body.ibu)
                  ? parseFloat(body.ibu).toFixed(2)
                  : 0}
              </div>
            </div>
            <div className="showRecipeData-overview-inner">
              <div>
                <strong>OG:</strong>
              </div>
              <div>
                {body.og && !isNaN(body.og)
                  ? parseFloat(body.og).toFixed(3)
                  : 0}
              </div>
            </div>
            <div className="showRecipeData-overview-inner">
              <div>
                <strong>FG:</strong>
              </div>
              <div>
                {body.fg && !isNaN(body.fg)
                  ? parseFloat(body.fg).toFixed(3)
                  : 0}
              </div>
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
              <div>
                {body.batchVolume && !isNaN(body.batchVolume)
                  ? parseFloat(body.batchVolume).toFixed(2)
                  : 0}
                L
              </div>
            </div>
            <div className="showRecipeData-overview-inner">
              <div>
                <strong>Mash Volume:</strong>
              </div>
              <div>
                {body.mashVolume && !isNaN(body.mashVolume)
                  ? parseFloat(body.mashVolume).toFixed(2)
                  : 0}
                L
              </div>
            </div>
            <div className="showRecipeData-overview-inner">
              <div>
                <strong>Sparge Volume:</strong>
              </div>
              <div>
                {body.spargeVolume && !isNaN(body.spargeVolume)
                  ? parseFloat(body.spargeVolume).toFixed(2)
                  : 0}
                L
              </div>
            </div>
            <div className="showRecipeData-overview-inner">
              <div>
                <strong>Equipment Efficiency:</strong>
              </div>
              <div>
                {body.efficiency && !isNaN(body.efficiency)
                  ? parseFloat(body.efficiency).toFixed(2)
                  : 0}
                %
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowRecipeData;
