import "../commonEngredientsModal.css";
import { useState } from "react";
import { useEffect } from "react";
import "./addProduct.css";

const AddProduct = ({ colorOrIbu, fetchProp }) => {
  const [listProducts, setListProducts] = useState([]);
  const [search, setSearch] = useState("");

  const [add, setAdd] = useState(false);
  const fetchProducts = async (fetchProps) => {
    const res = await fetch(`http://localhost:3001/${fetchProps}`);
    const data = await res.json();
    await setListProducts(data);
  };
  useEffect(() => {
    fetchProducts(fetchProp);
  }, [fetchProp]);

  const postProducts = async (fetchProp, search) => {
    const res = await fetch(`http://localhost:3001/${fetchProp}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: search }),
    });
    const data = await res.json();
    setListProducts(data);
  };
  return (
    <div className="common-ingredients-container-inside-section-middle">
      <div className="add-products top">
        <div className="left">
          <div className="mt-3">
            <div>Name</div>
            <div className="add-products-top-input">
              <input type="text" placeholder="Select a name" />
            </div>
          </div>{" "}
          {fetchProp === "hops" ? (
            <div className="mt-3">
              <div>Type</div>
              <div className="add-products-top-input">
                <input type="text" placeholder="Select a value" />
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {fetchProp === "yeasts" ? (
            <div className="mt-3">
              <div>ID</div>
              <div className="add-products-top-input">
                <input type="text" placeholder="Select a name" />
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {fetchProp === "malts" ? (
            <div className="mt-3">
              <div>Category</div>
              <div className="add-products-top-input">
                <input type="text" placeholder="Select a name" />
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
                <input type="text" placeholder="Select a value" />
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {fetchProp === "malts" ? (
            <div className="mt-3">
              <div>Supplier</div>
              <div className="add-products-top-input">
                <input type="text" placeholder="Select a name" />
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {fetchProp === "yeasts" ? (
            <div className="mt-3">
              <div>Laboratory</div>
              <div className="add-products-top-input">
                <input type="text" placeholder="Select a name" />
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {fetchProp === "yeasts" ? (
            <div className="mt-3">
              <div>ABV toll (%)</div>
              <div className="add-products-top-input">
                <input type="text" placeholder="Select a value" />
              </div>
            </div>
          ) : (
            <div className="mt-3">
              <div>Origin</div>
              <div className="add-products-top-input">
                <input type="text" placeholder="Select a name" />
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
              <input type="text" placeholder="Select a value" />
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {fetchProp === "malts" ? (
          <div className="mt-3">
            <div>Type</div>
            <div className="add-products-top-input">
              <input type="text" placeholder="Select a value" />
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
        {fetchProp === "hops" ? (
          <div></div>
        ) : (
          <div className="mt-3">
            <div>{colorOrIbu}</div>
            <div className="add-products-top-input">
              <input type="text" placeholder="Select a value" />
            </div>
          </div>
        )}

        {fetchProp === "malts" ? (
          <div className="mt-3">
            <div>Potential</div>
            <div className="add-products-top-input">
              <input type="text" placeholder="Select a value" />
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {fetchProp === "yeasts" ? (
          <div className="mt-3">
            <div>Att (%)</div>
            <div className="add-products-top-input">
              <input type="text" placeholder="Select a value" />
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {fetchProp === "malts" ? (
          <div className="mt-3">
            <div>Yield</div>

            <div className="add-products-top-input">
              <input type="text" placeholder="Select a value" />
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {fetchProp === "yeasts" ? (
          <div className="mt-3">
            <div>T. Range</div>

            <div className="add-products-top-input">
              <input type="text" placeholder="Select a value" />
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
              <input type="text" placeholder="Select a value" />
            </div>
          </div>
          <div className="mt-3">
            <div>Flocculation</div>

            <div className="add-products-top-input">
              <input type="text" placeholder="Select a value" />
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
