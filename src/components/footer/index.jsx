import vector2 from "../../img/Vector2.png";
import vector1 from "../../img/Vector1.png";
import "./style.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="first">
        <img src={vector2} alt="" />
      </div>
      <div className="second">
        <img src={vector1} alt="" />
      </div>
    </div>
  );
};

export default Footer;
