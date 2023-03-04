import "../commonEngredientsModal.css";
import { useState } from "react";
import { useEffect } from "react";
import "./addProduct.css";

const AddProduct = ({ colorOrIbu, fetchProp, setNewIngredient }) => {
  useEffect(() => {}, [fetchProp]);

  return (
    <div className="common-ingredients-container-inside-section-middle">
      <div className="add-products top">
        <div className="left">
          <div className="mt-3">
            <div>Name</div>
            <div className="add-products-top-input">
              <input
                type="text"
                placeholder="Select a name"
                onChange={(e) => setNewIngredient("name", e.target.value)}
              />
            </div>
          </div>{" "}
          {fetchProp === "hops" ? (
            <div className="mt-3">
              <div>Type</div>
              <div className="add-products-top-input">
                <input
                  type="text"
                  placeholder="Select a value"
                  onChange={(e) => setNewIngredient("type", e.target.value)}
                />
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {fetchProp === "yeasts" ? (
            <div className="mt-3">
              <div>ID</div>
              <div className="add-products-top-input">
                <input
                  type="text"
                  placeholder="Select a name"
                  onChange={(e) => setNewIngredient("techName", e.target.value)}
                />
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {fetchProp === "malts" ? (
            <div className="mt-3">
              <div>Category</div>
              <div className="add-products-top-input">
                <input
                  type="text"
                  placeholder="Select a name"
                  onChange={(e) => setNewIngredient("category", e.target.value)}
                />
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="right">
          {fetchProp === "hops" ? (
            <div className="mt-3">
              <div>Alpha (%)</div>
              <div className="add-products-top-input">
                <input
                  type="number"
                  placeholder="Select a value"
                  onChange={(e) => setNewIngredient("alpha", e.target.value)}
                />
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {fetchProp === "malts" ? (
            <div className="mt-3">
              <div>Supplier</div>
              <div className="add-products-top-input">
                <input
                  type="text"
                  placeholder="Select a name"
                  onChange={(e) => setNewIngredient("supplier", e.target.value)}
                />
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {fetchProp === "yeasts" ? (
            <div className="mt-3">
              <div>Laboratory</div>
              <div className="add-products-top-input">
                <input
                  type="text"
                  placeholder="Select a name"
                  onChange={(e) =>
                    setNewIngredient("laboratory", e.target.value)
                  }
                />
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {fetchProp === "yeasts" ? (
            <div className="mt-3">
              <div>ABV toll (%)</div>
              <div className="add-products-top-input">
                <input
                  type="number"
                  placeholder="Select a value"
                  onChange={(e) => setNewIngredient("maxAbv", e.target.value)}
                />
              </div>
            </div>
          ) : (
            <div className="mt-3">
              <div>Origin</div>
              <div className="add-products-top-input">
                <input
                  type="text"
                  placeholder="Select a name"
                  onChange={(e) => setNewIngredient("origin", e.target.value)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="add-products below">
        {fetchProp === "yeasts" ? (
          <div className="mt-3">
            <div>Form</div>
            <div className="add-products-top-input">
              <input
                type="text"
                placeholder="Select a value"
                onChange={(e) => setNewIngredient("form", e.target.value)}
              />
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {fetchProp === "malts" ? (
          <div className="mt-3">
            <div>Type</div>
            <div className="add-products-top-input">
              <input
                type="text"
                placeholder="Select a value"
                onChange={(e) => setNewIngredient("type", e.target.value)}
              />
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {fetchProp === "hops" ? (
          <div className="mt-3">
            <div></div>
            <div className="add-products-top-input"></div>
          </div>
        ) : (
          <div></div>
        )}
        {fetchProp === "hops" ? <div></div> : <div></div>}
        {fetchProp === "yeasts" ? (
          <div className="mt-3">
            <div>{colorOrIbu}</div>
            <div className="add-products-top-input">
              <input
                type="number"
                placeholder="Select a value"
                onChange={(e) =>
                  setNewIngredient("cellsPerGram", e.target.value)
                }
              />
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {fetchProp === "malts" ? (
          <div className="mt-3">
            <div>{colorOrIbu}</div>
            <div className="add-products-top-input">
              <input
                type="number"
                placeholder="Select a value"
                onChange={(e) => setNewIngredient("color", e.target.value)}
              />
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {fetchProp === "malts" ? (
          <div className="mt-3">
            <div>Potential</div>
            <div className="add-products-top-input">
              <input
                type="number"
                placeholder="Select a value"
                onChange={(e) => setNewIngredient("potential", e.target.value)}
              />
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {fetchProp === "yeasts" ? (
          <div className="mt-3">
            <div>Att (%)</div>
            <div className="add-products-top-input">
              <input
                type="number"
                placeholder="Select a value"
                onChange={(e) =>
                  setNewIngredient("attenuation", e.target.value)
                }
              />
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {fetchProp === "malts" ? (
          <div className="mt-3">
            <div>Yield</div>

            <div className="add-products-top-input">
              <input
                type="number"
                placeholder="Select a value"
                onChange={(e) => setNewIngredient("yield", e.target.value)}
              />
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {fetchProp === "yeasts" ? (
          <div className="mt-3">
            <div>T. Range</div>

            <div className="add-products-top-input">
              <input
                type="text"
                placeholder="Select a value"
                onChange={(e) =>
                  setNewIngredient("temperature", e.target.value)
                }
              />
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {fetchProp === "yeasts" ? (
        <div className="add-products below">
          <div className="mt-3">
            <div>Type</div>

            <div className="add-products-top-input">
              <input
                type="text"
                placeholder="Select a value"
                onChange={(e) => setNewIngredient("type", e.target.value)}
              />
            </div>
          </div>
          <div className="mt-3">
            <div>Flocculation</div>

            <div className="add-products-top-input">
              <input
                type="text"
                placeholder="Select a value"
                onChange={(e) =>
                  setNewIngredient("flocculation", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="add-products">
        <div></div>
      </div>
    </div>
  );
};

export default AddProduct;
