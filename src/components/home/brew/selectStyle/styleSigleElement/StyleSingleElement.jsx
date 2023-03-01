import "./styleSingleElement.css";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
const StyleSingleElement = ({ propsShow, setPropsShow }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {}, [propsShow]);
  const handleShowClick = async () => {
    await setPropsShow(false);
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  return (
    <div className="selectStyle-list-element" onClick={handleShowClick}>
      <div className="selectStyle-list-circle">
        {show && <div className="selectStyle-list-ball"></div>}
      </div>
      <h4>Standard American Beer</h4>
    </div>
  );
};

export default StyleSingleElement;
