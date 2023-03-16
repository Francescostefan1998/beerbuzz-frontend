import "../comment.css";
import { BsTrashFill } from "react-icons/bs";
import { MdAddCircle } from "react-icons/md";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SingleComment = ({ commentBody, addRecipeAction, setAdd }) => {
  return (
    <div className="single-comment">
      <div>
        {" "}
        <BsTrashFill
          className="ingredients-others-single-icon"
          onClick={() => addRecipeAction(commentBody, "delete")}
        />
      </div>

      {commentBody && (
        <div className="ingredients-others-single-grow1">
          {commentBody.name}:
        </div>
      )}
      {commentBody && (
        <div className="ingredients-others-single-grow1 second">
          {commentBody.comment}
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

export default SingleComment;
