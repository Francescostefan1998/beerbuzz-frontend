import "../others.css";
import { BsTrashFill } from "react-icons/bs";
import { MdAddCircle } from "react-icons/md";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const SingleOther = ({
  engredient,
  setAdd,
  subtractRecipeAction,
  addRecipeAction,
  setRefreshDeleting,
}) => {
  const [classPurple, setClassPurple] = useState("ingredients-others-single");
  const [refresh, setRefresh] = useState();
  const { others } = useSelector((state) => state.recipeIngredient);

  const deleteElement = async (others, engredient) => {
    if (engredient.name !== "example") {
      const res = await fetch(
        `http://localhost:3001/${others}/${engredient._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log(data);
      await subtractRecipeAction(engredient);
      await setAdd(false);
    } else {
      return;
    }
  };
  const verifySelection = async (others, engredient) => {
    if (engredient.name !== "example") {
      const verifySelection1 = others.find(
        (other) => other._id === engredient._id
      );
      setClassPurple(
        verifySelection1
          ? "ingredients-others-single purple"
          : "ingredients-others-single"
      );
    } else {
      setClassPurple("ingredients-others-single");
    }
  };
  const addOrSubtractOther = async (engredient) => {
    if (engredient.name !== "example") {
      const verifySelection1 = others.find(
        (other) => other._id === engredient._id
      );
      if (verifySelection1) {
        await subtractRecipeAction(engredient);
        await setRefresh(true);
        setClassPurple("ingredients-others-single");
      } else {
        await addRecipeAction(engredient);
        await setRefresh(false);
        setClassPurple("ingredients-others-single purple");
      }
    } else {
      setClassPurple("ingredients-others-single");
    }
  };
  useEffect(() => {
    verifySelection(others, engredient);
  }, [engredient]);

  return (
    <div
      className={classPurple}
      onClick={() => addOrSubtractOther(engredient, others)}
    >
      <div>
        {" "}
        <BsTrashFill
          className="ingredients-others-single-icon"
          onClick={() => deleteElement("others", engredient)}
        />
      </div>

      {engredient && (
        <div className="ingredients-others-single-grow1">{engredient.name}</div>
      )}
      {engredient && (
        <div className="ingredients-others-single-grow1">
          Desc: {engredient.description}
        </div>
      )}
      <div>
        {" "}
        <MdAddCircle
          className="ingredients-others-single-icon"
          onClick={() => setAdd(true)}
        />
      </div>
    </div>
  );
};

export default SingleOther;
