import Navbar from "../../components/navbar";
import seller from "../../img/seller.png";
import xcover from "../../img/Xcover.png";
import "./style.css";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { GiAirplaneDeparture } from "react-icons/gi";
import { TbWeight } from "react-icons/tb";
const Booking = () => {
  const loginStyle = {
    display: "none",
  };
  return (
    <div className="booking-container">
      <Navbar style1={loginStyle} style={loginStyle} />
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
          <div className="bullet">
            <span>3</span>
          </div>
          <p>Results</p>
        </div>
        <div className="step">
          <div className="bullet">
            <span>4</span>
          </div>
          <p>Booking</p>
        </div>
      </div>
      <div className="grid-section">
        <div className="main-side">
          <div className="booking-summary">
            <div className="booking-head-text">Booking summary</div>
            <div className="midlle">
              <div className="exp">Express</div>
              <GiAirplaneDeparture className="exp-icon" />
            </div>
            <div className="direction">
              <div className="booking-location line">
                <HiOutlineBuildingLibrary className="building-icon" />
                <div className="state">Delhi,</div>
                <div className="co-country">110003 India</div>
              </div>
              <div className="booking-location">
                <HiOutlineBuildingLibrary className="building-icon" />
                <div className="state">Shanghai</div>
                <div className="co-country">200080, China</div>
              </div>
            </div>
          </div>
          <div className="weight-load">
            <div className="weight">
              <div className="total-weight-text">Total Weight/Volume</div>
              <TbWeight className="weight-icon" />
              <div className="kg-text">114.21KG</div>
            </div>
            <div className="load">
              <div className="load-text">Load</div>
              <div className="x-pall">
                <div className="x1">1X</div>
                <div className="pallet-container">
                  <TbWeight className="weight-icon" />
                  <div className="pall">Pallets</div>
                  <div className="pall-size">230 X 140 X 120 CM</div>
                </div>
              </div>
            </div>
          </div>
          <div className="seller-insurance">
            <div className="seller">
              <div className="text-sell">Seller: Primetime Worldwide</div>
              <img src={seller} alt="" />
            </div>
            <div className="seller">
              <div className="text-sell">Insurance:Xcover.com</div>
              <img src={xcover} alt="" />
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="price-details">
            <div className="price-head">
              <div className="price-text">Price details</div>
              <div className="shipper">
                <HiOutlineBuildingLibrary className="star-icon" />
                <div className="shipper-text">Known shipper</div>
              </div>
            </div>
            <div className="qoute">
              <div className="seller-quote">Seller’s Quote</div>
              <div className="quote-money">$ 3,659.25</div>
            </div>
            <div className="duties">
              <div className="seller-quote">Duties and taxes</div>
              <div className="quote-money">Not Included</div>
            </div>
            <div className="insurance">
              <div className="insu-text">
                <div className="seller-quote">Insurance</div>
              </div>
              <div className="quote-money">$323.40</div>
            </div>
            <div className="t1">Based on the items cost</div>
            <div className="promo-code">Add a promo code</div>
            <div className="platform">
              <div className="seller-quote">Platform fee</div>
              <div className="quote-money">$119.48</div>
            </div>
            <div className="total-seller">
              <div className="seller-quote">Total:</div>
              <div className="quote-money">$ 4,102.13</div>
            </div>
            <div className="checkout">
              <button className="checkout-btn">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
