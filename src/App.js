
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RegisterReq from './LoginComponents/RegisterReq';
import Register from './LoginComponents/Register';
import ForgotReq from './LoginComponents/ForgotReq';
import Forgot from './LoginComponents/Forgot';
import Login from './LoginComponents/Login';
import Pizzawindow from './Pizzawindow';
import Indexes from "./Indexes";
import Indexes1 from "./Indexes1";

function App() {
  return (
    <div >
       <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Forgot" element={<Forgot />} />
            <Route path="/ForgotReq" element={<ForgotReq />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/RegisterReq" element={<RegisterReq />} />
            <Route path="/Pizzawindow" element={<Pizzawindow />} />
            <Route path="/payment" element={<Indexes1 />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
    </div>
  );
}

export default App;
