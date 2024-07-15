import React, { useContext, useEffect, useState } from "react";
import Foodcart from "./Foodcart";

function CartPage({ data }) {
  return (
    <div className="flex items-center justify-center ">
      <Foodcart data={data} />
    </div>
  );
}

export default CartPage;
