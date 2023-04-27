import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import LoginHome from "./pages/loginhome";
import Booking from "./pages/booking";
import ShoppingDetails from "./pages/shippingDetail/indesx";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/loginhome" element={<LoginHome />} />
        <Route index path="/booking" element={<Booking />} />
        <Route index path="/shippingdetails" element={<ShoppingDetails />} />
      </Routes>
    </div>
  );
}

export default App;
