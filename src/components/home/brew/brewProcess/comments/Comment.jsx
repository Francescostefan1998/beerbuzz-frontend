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
      console.log(commentList[0]);
      const newArray = await commentList.filter(
        (comment) => comment.name === body.name
      );
      console.log(newArray);
      let mycomments = comments;
      mycomments[0] = newArray;
      await dispatch(addCommentsRecipeAction(newArray));
      setRefreshThisState(body.name + "sub");
    }
    if (param === "add") {
      if (Array.isArray(commentList) && commentList.length >= 1) {
        const newArray = await commentList.push(body);
        let mycomments = comments;
        mycomments[0] = newArray;
        await dispatch(addCommentsRecipeAction(newArray));
        setRefreshThisState(body.name + "sub");
      } else {
        await dispatch(addCommentsRecipeAction(body));
      }
    }
  };

  useEffect(() => {
    console.log(comments);
    setComments(comments);
    console.log(comments[0]);
  }, [add, refreshThisState]);
  return (
    <div className="comment">
      <div>comment</div>
      {Array.isArray(commentList) && commentList.length >= 2 ? (
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
