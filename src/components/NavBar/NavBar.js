import CartWidget from "../CartWidget/CartWidget";
import moon from "./assets/moon.jpg";
import sun from "./assets/sun.jpg";
import "./NavBar.css";

const NavBar = () => {
return (
    <nav>
    <img src={sun} alt="logo" width="50px"/>
    <div>
        <button>Home</button>
        <button>Equipment</button>
        <button>Objects</button>
        <button>Pets</button>
        <CartWidget />
    </div>
    <img src={moon} alt="moon" width="50px"/>
    </nav>
);
};
export default NavBar;