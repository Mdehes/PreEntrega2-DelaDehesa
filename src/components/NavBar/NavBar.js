import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import moon from "./assets/moon.jpg";
import sun from "./assets/sun.jpg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <img src={sun} alt="logo" width="50px" />
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/category/equipment">
          <button>Equipment</button>
        </Link>
        <Link to="/category/objects">
          <button>Objects</button>
        </Link>
        <Link to="/category/pets">
          <button>Pets</button>
        </Link>
        <Link>
        <CartWidget />
        </Link>
      </div>
      <img src={moon} alt="moon" width="50px" />
    </nav>
  );
};
export default NavBar;
