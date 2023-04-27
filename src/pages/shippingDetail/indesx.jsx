import Navbar from "../../components/navbar";
import "./style.css";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { RiShip2Line } from "react-icons/ri";
import { BiMessageRoundedMinus } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import seller from "../../img/seller.png";
const ShoppingDetails = () => {
  const loginStyle = {
    display: "none",
  };
  return (
    <div className="shipping-detail-container">
      <Navbar style={loginStyle} />
      <div className="load-progress">
        <div className="origin-city edit">
          <div className="location-icon ">
            <RiShip2Line className="icon" />
            <div className="oringin-city-input">
              <input type="text" className="inp-bor" placeholder="Load" />
            </div>
          </div>
        </div>
        <div className="progress-bar">
          <div className="step">
            <div className="bullet">
              <span>1</span>
            </div>
            <p>Search</p>
          </div>
          <div className="step">
            <div className="bullet">
              <span>2</span>
            </div>
            <p>Recommended services</p>
          </div>
          <div className="step  move">
            <div className="bullet ">
              <span>3</span>
            </div>
            <p>Results</p>
          </div>
          <div className="step">
            <div className="bullet disab">
              <span>4</span>
            </div>
            <p className="change">Booking</p>
          </div>
        </div>
      </div>
      <div className="search-form">
        <div className="origin-city">
          <div className="location-icon">
            <CiLocationOn className="icon" />
            <div className="oringin-city-input">
              <input type="text" placeholder="Delhi, 110003" />
            </div>
          </div>
        </div>
        <div className="origin-city">
          <div className="location-icon">
            <CiLocationOn className="icon" />
            <div className="oringin-city-input">
              <input
                type="text"
                className="inp-bor"
                placeholder="Shanghai 200080"
              />
            </div>
          </div>
        </div>
        <div className="origin-city">
          <div className="location-icon bor">
            <HiOutlineCalendarDays className="icon" />
            <div className="oringin-city-input">
              <input
                type="text"
                className="inp-bor"
                placeholder="13 April 2023"
              />
            </div>
          </div>
        </div>
        <div className="origin-city">
          <div className="location-icon bor">
            <RiShip2Line className="icon" />
            <div className="oringin-city-input">
              <input
                type="text"
                className="inp-bor"
                placeholder="114.21KG - AIR"
              />
            </div>
          </div>
        </div>
        <div className="submit bor">
          <AiOutlineArrowRight className="edit-icon" />
        </div>
      </div>
      <hr />
      <div className="top-best-value">
        <div className="top-side">
          <div className="top-text">
            3 Top Quote <div className="span">(6 in Total)</div>
          </div>
          <div className="dropdown-top">
            <select name="filter" id="select">
              <option value="#">Filter</option>
            </select>
          </div>
          <div className="dropdown-top">
            <select name="filter" id="select">
              <option value="#">Price</option>
            </select>
          </div>
          <div className="dropdown-top">
            <select name="filter" id="select">
              <option value="#">Modes</option>
            </select>
          </div>
          <div className="dropdown-top">
            <select name="filter" id="select">
              <option value="#">Seller</option>
            </select>
          </div>
        </div>

        <div className="best-side">
          <div className="best-head">
            <div className="value">
              <div className="best-text ">Best Value 5-5 days. $3,121</div>
            </div>

            <div className="best-text2">Quickest 5-5 days. $3,121</div>
            <div className="best-text3">Cheapest 5-5 days. $3,121</div>
          </div>
          <div className="best-content">
            <div className="best-express">
              <div className="best-value-day">
                <div className="best-value">
                  <div className="best-circle"></div>
                  <div className="best-value-text">Best Value</div>
                </div>
                <div className="express">Express</div>
                <div className="days">Est. 5 days</div>
              </div>
              <div className="delhi-location-container">
                <div className="delhi">
                  <CiLocationOn className="icon" />
                  <div className="loc-text">110003, Delhi</div>
                </div>
                <div className="plane-di  delhi">
                  <CiLocationOn className="icon" />
                </div>
                <div className="delhi  del-plane">
                  <CiLocationOn className="icon" />
                  <div className="loc-text">110003, Delhi</div>
                </div>
              </div>
              <div className="world-review">
                <img src={seller} alt="" />
                <div className="world-text">Primetime Worldwide</div>
                <div className="star-container">
                  <CiLocationOn className="icon" />
                  <CiLocationOn className="icon" />
                  <CiLocationOn className="icon" />
                  <CiLocationOn className="icon" />
                  <CiLocationOn className="icon" />
                </div>
              </div>
            </div>
            <div className="money-select">
              <div className="money-sel">
                $ 3,982. <div className="reduce">63</div>
              </div>
              <button className="select-bttn">Select</button>

              <Link to={"/"} className="lin">
                <div className="view-detail">View details</div>
              </Link>
            </div>
          </div>
          <div className="best-content">
            <div className="best-express">
              <div className="best-value-day">
                <div className="best-value b-val">
                  <div className="best-circle another"></div>
                  <div className="best-value-text">Eco</div>
                </div>
                <div className="express">Express</div>
                <div className="days">Est. 5 days</div>
              </div>
              <div className="delhi-location-container">
                <div className="delhi">
                  <CiLocationOn className="icon" />
                  <div className="loc-text">110003, Delhi</div>
                </div>
                <div className="plane-di  delhi">
                  <CiLocationOn className="icon" />
                </div>
                <div className="delhi  del-plane">
                  <CiLocationOn className="icon" />
                  <div className="loc-text">110003, Delhi</div>
                </div>
              </div>
              <div className="world-review">
                <img src={seller} alt="" />
                <div className="world-text">Primetime Worldwide</div>
                <div className="star-container">
                  <CiLocationOn className="icon" />
                  <CiLocationOn className="icon" />
                  <CiLocationOn className="icon" />
                  <CiLocationOn className="icon" />
                  <CiLocationOn className="icon" />
                </div>
              </div>
            </div>
            <div className="money-select">
              <div className="money-sel">
                $ 3,982. <div className="reduce">63</div>
              </div>
              <button className="select-bttn">Select</button>

              <Link to={"/"} className="lin">
                <div className="view-detail">View details</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="message-container">
        <BiMessageRoundedMinus />
      </div>
    </div>
  );
};

export default ShoppingDetails;
