import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <img src="https://cdn.shopify.com/s/files/1/0506/3177/products/seaga_inf4s_front_view_1024x1024.jpg?v=1563302913" />
      <div>
        <Link exact to="/coke">
          Coke
        </Link>
        <Link exact to="/cheetos">
          Cheetos
        </Link>
        <Link exact to="/snickers">
          Snickers
        </Link>
      </div>
    </div>
  );
}

export default VendingMachine;
