import "./comment.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import AddComment from "./addComment/AddComment";
import SingleComment from "./singleComment/SingleComment";
import { addCommentsRecipeAction } from "../../../../../redux/actions/recipe";

const Comment = () => {
  const [add, setAddNew] = useState(false);
  const [refreshThisState, setRefreshThisState] = useState("");
  const [commentList, setComments] = useState([
    {
      name: "example1",
      description: "example",
    },
    {
      name: "example",
      description: "example",
    },
  ]);
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
      console.log(commentList[0]);
      const newArray = await commentList.filter(
        (comment) => comment.name === body.name
      );
      console.log(newArray);

      await dispatch(addCommentsRecipeAction(newArray));
      setRefreshThisState(body.name + "sub");
    }
    if (param === "add") {
      const newArray = await commentList.push(body);
      await dispatch(addCommentsRecipeAction(newArray));
      setRefreshThisState(body.name + "sub");
    }
  };

  useEffect(() => {
    console.log(comments);
    console.log(comments[0]);
  }, [add, refreshThisState]);
  return (
    <div className="comment">
      <div>comment</div>
      {/*{commentList.length >= 1 ? (
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
      )}*/}
      {add && <AddComment setAdd={setAdd} addRecipeAction={addRecipeAction} />}
    </div>
  );
};

export default Comment;
