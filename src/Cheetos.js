import React from "react";
import { Link } from "react-router-dom";

function Cheetos() {
  return (
    <div className="Cheetos">
      <img src="https://images-na.ssl-images-amazon.com/images/I/91vxvpkS4PL._SL1500_.jpg" />
      <div>
        <Link exact to="/">
          Go back
        </Link>
      </div>
    </div>
  );
}

export default Cheetos;
