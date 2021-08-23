import React from "react";
import img from "../images/dogorama.png";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <img src={img} alt="dogorama-logo" />
      </div>
    </div>
  );
};

export default Header;
