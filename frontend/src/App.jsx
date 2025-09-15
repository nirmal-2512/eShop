import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components/login";
import Register from "./components/register";
import Shop from "./components/Shop";

import "./index.css";
import "./app.css";

export default function App() {
  return (
    <div className="fullbody">
      {/* <center className="fullbody"> */}
      <Navbar />
      <Shop />

      {/* <Login></Login> */}
      {/* <Register /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/watches" element={<Watches />} />
        <Route path="/services" element={<Services />} />
        <Route path="/stores" element={<Stores />} /> */}
      </Routes>
      {/* </center>  */}
    </div>
  );
}
