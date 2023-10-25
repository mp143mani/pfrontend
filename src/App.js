import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RegisterReq from "./LoginComponents/RegisterReq";
import Register from "./LoginComponents/Register";
import ForgotReq from "./LoginComponents/ForgotReq";
import Forgot from "./LoginComponents/Forgetpassword";
import Login from "./LoginComponents/Login";
import Kmart from "./Kmart";
import Buy from "./Buy";
import Price1 from "./Price1";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Forgot" element={<Forgot />} />
        <Route path="/ForgotReq" element={<ForgotReq />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/RegisterReq" element={<RegisterReq />} />
        <Route path="/Kmart" element={<Kmart />} />
        <Route path="/payment" element={<Price1 />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
}

export default App;
