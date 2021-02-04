import React from "react";
import { Link } from "react-router-dom";

function Coke() {
  return (
    <div className="Coke">
      <img src="https://images.heb.com/is/image/HEBGrocery/000862949" />
      <div>
        <Link exact to="/">
          Go back
        </Link>
      </div>
    </div>
  );
}

export default Coke;
