import "./malts.css";
import NavbarIngredients from "../navbarIngredients/NavbarIngredients";

const Malts = () => {
  return (
    <div className="malts">
      <NavbarIngredients prew="/water" next="/hops" />
      <div>hello</div>
    </div>
  );
};

export default Malts;
