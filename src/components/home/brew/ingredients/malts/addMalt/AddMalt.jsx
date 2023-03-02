import "../malts.css";
import "./addMalt.css";

const AddMalt = () => {
  return (
    <div className="malts-container-inside-section-middle">
      <div className="add-malts top">
        <div className="left">
          <div className="mt-3">
            <div>Name</div>
            <div className="add-malts-top-input">
              <input type="text" placeholder="Select a name" />
            </div>
          </div>
          <div className="mt-3">
            <div>Category</div>
            <div className="add-malts-top-input">
              <input type="text" placeholder="Select a name" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="mt-3">
            <div>Supplier</div>
            <div className="add-malts-top-input">
              <input type="text" placeholder="Select a name" />
            </div>
          </div>
          <div className="mt-3">
            <div>Origin</div>
            <div className="add-malts-top-input">
              <input type="text" placeholder="Select a name" />
            </div>
          </div>
        </div>
      </div>
      <div className="add-malts below">
        <div className="mt-3">
          <div>Type</div>
          <div className="add-malts-top-input">
            <input type="text" placeholder="Select a name" />
          </div>
        </div>
        <div className="mt-3">
          <div>Color (EBC)</div>
          <div className="add-malts-top-input">
            <input type="text" placeholder="Select a name" />
          </div>
        </div>
        <div className="mt-3">
          <div>Potential</div>
          <div className="add-malts-top-input">
            <input type="text" placeholder="Select a name" />
          </div>
        </div>
        <div className="mt-3">
          <div>Yeld</div>
          <div className="add-malts-top-input">
            <input type="text" placeholder="Select a name" />
          </div>
        </div>
      </div>
      <div className="add-malts">
        <div></div>
        <div className="malts-container-inside-search-input"></div>
      </div>
    </div>
  );
};

export default AddMalt;
