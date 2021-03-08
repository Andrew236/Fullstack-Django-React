import React from "react";
import Header from "../components/Header";
import BuyFormComp from "../components/BuyFormComp";
import Navbar from "../components/Navbar"
import Try from "../components/Try";
export default function BuyForm() {
  return (
    <div>
      <Header title="Order Form" />
      <BuyFormComp/>
    </div>
  );
}
