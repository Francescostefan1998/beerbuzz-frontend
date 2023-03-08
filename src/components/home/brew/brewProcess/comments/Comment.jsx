import "./comment.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import AddComment from "./addComment/AddComment";
import SingleComment from "./singleComment/SingleComment";
import { addCommentsRecipeAction } from "../../../../../redux/actions/recipe";
import { subtractCommentsRecipeAction } from "../../../../../redux/actions/recipe";

const Comment = () => {
  const [add, setAddNew] = useState(false);
  const [refreshThisState, setRefreshThisState] = useState("");
  const [commentList, setComments] = useState([]);
  console.log(commentList);
  console.log(commentList);
  const [commentListExample, setCommentList] = useState([
    {
      name: "example",
      description: "example",
    },
  ]);
  const { comments } = useSelector((state) => state.createRecipe);
  const dispatch = useDispatch();
  const setAdd = async (param) => {
    await setAddNew(param);
  };
  const addRecipeAction = async (body, param) => {
    if (param === "delete") {
      await dispatch(subtractCommentsRecipeAction(body));
      setRefreshThisState(body.name + "sub");
    }
    if (param === "add") {
      await dispatch(addCommentsRecipeAction(body));
      setRefreshThisState(body.name + "add");
    }
  };

  useEffect(() => {
    console.log(comments);
    setComments(comments);
    console.log(comments);
  }, [add, refreshThisState]);
  return (
    <div className="comment">
      <div className="comment-title">
        <h5>Comments</h5>
      </div>
      {Array.isArray(commentList) && commentList.length >= 1 ? (
        commentList.map((comment, i) => (
          <SingleComment
            key={comment.name}
            setAdd={setAdd}
            commentBody={comment}
            addRecipeAction={addRecipeAction}
          />
        ))
      ) : (
        <SingleComment
          setAdd={setAdd}
          commentBody={commentListExample[0]}
          addRecipeAction={addRecipeAction}
        />
      )}
      {add && <AddComment setAdd={setAdd} addRecipeAction={addRecipeAction} />}
    </div>
  );
};

export default Comment;
