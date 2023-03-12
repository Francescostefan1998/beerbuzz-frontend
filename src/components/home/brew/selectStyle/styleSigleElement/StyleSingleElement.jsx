import "./styleSingleElement.css";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addStyleAction } from "../../../../../redux/actions/style";
import { IoMdBeer } from "react-icons/io";
const StyleSingleElement = ({ propsShow, setPropsShow, body }) => {
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {}, [propsShow]);
  const handleShowClick = async () => {
    await setPropsShow(false);
    if (!show) {
      setShow(true);
      dispatch(addStyleAction(body));
    } else {
      setShow(false);
    }
  };
  const handleDescription = (description) => {
    if (description) {
      setDescription(false);
    } else {
      setDescription(true);
    }
  };
  return (
    <>
      <div className="selectStyle-list-element" onClick={handleShowClick}>
        <div className="selectStyle-list-circle">
          {show && <div className="selectStyle-list-ball"></div>}
        </div>
        <IoMdBeer />
        <h4>{body.name}</h4>
        {!description && (
          <FaExpandArrowsAlt onClick={(e) => handleDescription(description)} />
        )}
        {description && (
          <FaCompressArrowsAlt
            onClick={(e) => handleDescription(description)}
          />
        )}
      </div>
      {description && (
        <div>
          <ul>
            <li>
              <strong> ABV</strong>: {body.stats.abv[0]}-{body.stats.abv[1]}
            </li>
            <li>
              <strong>EBC</strong>: {body.stats.ebc[0]}-{body.stats.ebc[1]}
            </li>
            <li>
              <strong>IBU</strong>: {body.stats.ibu[0]}-{body.stats.ibu[1]}
            </li>
            <li>
              <strong>OG</strong>: {body.stats.og[0]}-{body.stats.og[1]}
            </li>
            <li>
              <strong>FG</strong>: {body.stats.fg[0]}-{body.stats.fg[1]}
            </li>
            <li>
              <strong>Apperance</strong>: {body.apperance}
            </li>
            <li>
              <strong>Aroma</strong>: {body.aroma}
            </li>
            <li>
              <strong>Flavour</strong>: {body.flavor}
            </li>
            <li>
              <strong>Ingredients</strong>: {body.ingredients}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default StyleSingleElement;
