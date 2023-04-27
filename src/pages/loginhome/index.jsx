import Navbar from "../../components/navbar";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { RiShip2Line } from "react-icons/ri";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { HiGlobeAlt } from "react-icons/hi2";
import { TfiSupport } from "react-icons/tfi";
import { BiMessageRoundedMinus } from "react-icons/bi";
import Footer from "../../components/footer";
const LoginHome = () => {
  const loginStyle = {
    display: "none",
  };
  return (
    <div className="home-container">
      <Navbar style={loginStyle} />
      <div className="hero-container">
        <div className="hero-text">
          <div className="text-1">Hassle-Free Shipping Solutions</div>
          <div className="text-2">
            Compare, book, and manage your freight across the world’s top
            logistics providers, all on one platform.
          </div>
        </div>
      </div>
      <div className="search-form">
        <div className="origin-city">
          <div className="location-icon">
            <CiLocationOn className="icon" />
            <div className="oringin-city-input">
              <input type="text" placeholder="Origin, Port, City" />
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
                placeholder="Destination, Port, City"
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
              <input type="text" className="inp-bor" placeholder="Load" />
            </div>
          </div>
        </div>
        <div className="submit bor">
          <button className="arrow">
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
      <div className="service-section">
        <div className="service-title">Services</div>
        <div className="service-row">
          <div className="service-col">
            <div className="col-head">
              <RiShip2Line className="icon-col1" />
              <div className="col-text">Freight Services</div>
            </div>
            <div className="col-body">
              Open new Opportunites to grow your busniess. Enter new markets and
              discover new contitnents, We are with you, door-to-door.
            </div>
          </div>
          <div className="service-col">
            <div className="col-head">
              <HiOutlineBriefcase className="icon-col2" />
              <div className="col-text">Business Services</div>
            </div>
            <div className="col-body">
              We support your goals for growth with cargo insurance, online
              payments and paperless workflow. Take your business to the next
              level.
            </div>
          </div>
          <div className="service-col">
            <div className="col-head">
              <HiGlobeAlt className="icon-col3" />
              <div className="col-text xl">Shipping & Logistics </div>
            </div>
            <div className="col-body">
              Find powerful solutions to meet your diverse transportation needs.
              Agile solutions to handle all your supply chain needs.
            </div>
          </div>
          <div className="service-col">
            <div className="col-head">
              <TfiSupport className="icon-col4" />
              <div className="col-text">24/7 Support</div>
            </div>
            <div className="col-body">
              Receive support from our experts all over the world at every stage
              of the process, 24/7.
            </div>
          </div>
        </div>
      </div>
      <div className="message-container">
        <BiMessageRoundedMinus />
      </div>
      <Footer />
    </div>
  );
};

export default LoginHome;
