import Logo from "../../assets/Logo.png";
import { MapPin } from "phosphor-react";
import Cart from "../utils/cart";
import { Link } from "react-router-dom";
import { countContext } from "../../context/countContext";
import { adressContext } from "../../context/adressContext";
import { useContext } from "react";

const Navbar = () => {

    const { count } = useContext(countContext);
    const { adress } = useContext(adressContext)

    return (
        <nav className="navbar">
            <div className="container" id="container-navbar">
                <img src={Logo} className="logo" alt="logo"></img>
                <div className="actions d-flex align-items-center gap-3">
                    <div className="location d-flex align-items-center justify-content-center rounded-2 p-2">
                        <MapPin color="#8047F8" weight="fill" size={22}/>
                        <span className="location-text ps-1">{`${adress.city}, ${adress.uf}`}</span>
                    </div>
                    <Link to="/cart">
                    <Cart class={"nav-cart d-flex align-items-center justify-content-center rounded-2"}
                          color={"#C47F17"}
                          content={count > 0 ? <span className="counter d-flex align-items-center justify-content-center rounded-circle position-absolute">{count}</span> : ""}
                        />
                    </Link>
                </div>
            </div>
        </nav>
        
    )
}

export default Navbar;

//content={<span className="counter d-flex align-items-center justify-content-center rounded-circle position-absolute">{count}</span>}