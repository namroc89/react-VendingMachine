import React from "react";
import { Link } from "react-router-dom";

function Snickers() {
  return (
    <div className="Snickers">
      <img src="http://cdn.shopify.com/s/files/1/0736/7879/products/snickers-bar-by-mars-canada_1024x.png?v=1489623542" />
      <div>
        <Link exact to="/">
          Go back
        </Link>
      </div>
    </div>
  );
}

export default Snickers;
