import "./navbarIngredients.css";
import { useNavigate } from "react-router-dom";
import { IoArrowUndo } from "react-icons/io5";
const NavbarIngredients = ({ prew, next }) => {
  const navigate = useNavigate();
  return (
    <div className="navbarIngredients">
      <div onClick={() => navigate(prew)} className="navbarIngredients-prew">
        <IoArrowUndo className="navbarIngredients-prew-icon" />
      </div>
      <div onClick={() => navigate(next)} className="navbarIngredients-next">
        Next
      </div>
    </div>
  );
};
export default NavbarIngredients;
