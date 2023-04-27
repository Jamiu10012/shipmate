import { Link } from "react-router-dom";
import { BiDollar } from "react-icons/bi";
import "./style.css";
const Navbar = (props) => {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="navbar_container">
          <Link to={"/"} className="link">
            <div className="logo-text">
              Ship<span>mate</span>
            </div>
          </Link>
        </div>
        <div className="navbar-btn" style={props.style}>
          <div className="nav-login">
            <Link to={"/loginhome"} className="link">
              <button className="login-btn">Login</button>
            </Link>
          </div>
          <div className="nav-learn">
            <Link to={"/shippingdetails"} className="link">
              <button className="learn-more-btn">Learn more</button>
            </Link>
          </div>
        </div>
        <div className="navbar-btn" style={props.style1}>
          <div className="nav-login">
            <Link to={"/shippingdetails"} className="link">
              <button className="dollar-btn">
                <BiDollar className="dollar-icon" />
              </button>
            </Link>
          </div>
          <div className="nav-learn">
            <Link to={"/booking"} className="link">
              <button className="track-btn">Track shipment</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
