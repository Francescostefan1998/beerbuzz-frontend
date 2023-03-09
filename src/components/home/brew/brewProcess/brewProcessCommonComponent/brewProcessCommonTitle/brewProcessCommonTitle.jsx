import "./brewProcessCommonTitle.css";
import { FaPen } from "react-icons/fa";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { addImageRecipeAction } from "../../../../../../redux/actions/recipe";
import { addNameRecipeAction } from "../../../../../../redux/actions/recipe";
import { addAuthorRecipeAction } from "../../../../../../redux/actions/recipe";
const BrewProcessCommonTitle = ({ select }) => {
  const dispatch = useDispatch();
  const { image } = useSelector((state) => state.createRecipe);
  const { name } = useSelector((state) => state.createRecipe);
  const { author } = useSelector((state) => state.createRecipe);

  const [myimage, setImage] = useState(null);
  const [thisImage, setThisImage] = useState(null);
  const [changePicture, setChangePicture] = useState(false);
  const user = localStorage.getItem("userId");
  const uploadImage = async (user) => {
    const formData = new FormData();
    formData.append("image", myimage);
    console.log("Upload triggered");
    try {
      const response = await axios.post(
        `http://localhost:3001/images/${user}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data.imagePath);
      alert("Image uploaded successfully");
      dispatch(addImageRecipeAction(response.data.imagePath));
      setThisImage(response.data.imagePath);
      if (response.ok) {
        console.log(response.imagePath);
        alert("Image uploaded successfully");
      }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="brewProcessCommonTitle">
      {select === "mash" ? (
        <div className="brewProcessCommonTitle-main">
          <FaPen
            className="brewProcessCommonTitle-image-modify"
            onClick={(e) => setChangePicture(true)}
          />
          {changePicture && (
            <div className="file-uploader">
              <div className="file-uploader-modal">
                <div
                  className="waterSouceData-close"
                  onClick={() => setChangePicture(false)}
                >
                  <RiCloseLine className="waterSouceData-close-icon" />
                </div>
                <div className="file-uploader__message-area">
                  <p> New Picture Upload</p>
                </div>
                {user && (
                  <div className="file-chooser mt-2">
                    <input
                      className="file-chooser__input input"
                      type="file"
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
                    />
                  </div>
                )}
                <input
                  className="file-uploader__submit-button mt-5 input"
                  onClick={() => uploadImage(user)}
                  type="submit"
                  value="Upload"
                />
                <hr />
              </div>
            </div>
          )}
          <div className="brewProcessCommonTitle-image">
            {!thisImage && !image && (
              <img
                src="https://th.bing.com/th/id/OIP.CaxyTtW5_xdxtnmTND4GeQHaHa?pid=ImgDet&rs=1"
                alt="beer"
              />
            )}
            {image && <img src={image} alt="beer" />}

            {thisImage && <img src={thisImage} alt="image" />}
          </div>
          <div className="brewProcessCommonTitle-title">
            <div>
              <div className="brewProcessCommonTitle-title-name">Name</div>
              <div className="brewProcessCommonTitle-title-input">
                <input
                  type="text"
                  placeholder="Choose a Name"
                  onChange={(e) =>
                    dispatch(addNameRecipeAction(e.target.value))
                  }
                />
              </div>
            </div>
            <div>
              <div className="brewProcessCommonTitle-title-name">Author</div>
              <div className="brewProcessCommonTitle-title-input">
                <input
                  type="text"
                  placeholder="Your Name"
                  onChange={(e) =>
                    dispatch(addAuthorRecipeAction(e.target.value))
                  }
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="brewProcessCommonTitle-main">
          <div className="brewProcessCommonTitle-image">
            {!image && (
              <img
                src="https://th.bing.com/th/id/OIP.CaxyTtW5_xdxtnmTND4GeQHaHa?pid=ImgDet&rs=1"
                alt="beer"
              />
            )}
            {image && <img src={image} alt="beer" />}
          </div>
          <div className="brewProcessCommonTitle-title">
            <div>
              <div className="brewProcessCommonTitle-title-name">Name</div>
              {name && (
                <div className="brewProcessCommonTitle-title-name">{name}</div>
              )}
              {!name && (
                <div className="brewProcessCommonTitle-title-name">--</div>
              )}
            </div>
            <div>
              <div className="brewProcessCommonTitle-title-name">Author</div>
              {author && (
                <div className="brewProcessCommonTitle-title-name">
                  {author}
                </div>
              )}
              {!author && (
                <div className="brewProcessCommonTitle-title-name">--</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrewProcessCommonTitle;
