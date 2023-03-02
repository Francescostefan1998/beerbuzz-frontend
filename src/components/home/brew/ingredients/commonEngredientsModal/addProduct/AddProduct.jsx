import "../commonEngredientsModal.css";

import "./addProduct.css";

const AddProduct = ({ colorOrIbu }) => {
  return (
    <div className="common-ingredients-container-inside-section-middle">
      <div className="add-products top">
        <div className="left">
          <div className="mt-3">
            <div>Name</div>
            <div className="add-products-top-input">
              <input type="text" placeholder="Select a name" />
            </div>
          </div>
          <div className="mt-3">
            <div>Category</div>
            <div className="add-products-top-input">
              <input type="text" placeholder="Select a name" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="mt-3">
            <div>Supplier</div>
            <div className="add-products-top-input">
              <input type="text" placeholder="Select a name" />
            </div>
          </div>
          <div className="mt-3">
            <div>Origin</div>
            <div className="add-products-top-input">
              <input type="text" placeholder="Select a name" />
            </div>
          </div>
        </div>
      </div>
      <div className="add-products below">
        <div className="mt-3">
          <div>Type</div>
          <div className="add-products-top-input">
            <input type="text" placeholder="Select a name" />
          </div>
        </div>
        <div className="mt-3">
          <div>{colorOrIbu}</div>
          <div className="add-products-top-input">
            <input type="text" placeholder="Select a name" />
          </div>
        </div>
        <div className="mt-3">
          <div>Potential</div>
          <div className="add-products-top-input">
            <input type="text" placeholder="Select a name" />
          </div>
        </div>
        <div className="mt-3">
          <div>Yeld</div>
          <div className="add-products-top-input">
            <input type="text" placeholder="Select a name" />
          </div>
        </div>
      </div>
      <div className="add-products">
        <div></div>
      </div>
    </div>
  );
};

export default AddProduct;
