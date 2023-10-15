import React, {   useState } from "react";
import { useNavigate } from "react-router-dom";

import Indexes from "./Indexes";


export default function Indexes1() {
  const navigate = useNavigate();


  const totalPrice = 5;

  return (
    < >
    <Indexes price={totalPrice} />
    </>

  );
}
