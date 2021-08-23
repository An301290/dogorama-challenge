import React from "react";
import { useSelector } from "react-redux";

const ParkComponent = () => {
  const parks = useSelector((state) => state.allParks.parks);
  const { id, title } = parks[0];

  return (
    <div className="four column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <div className="header">{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkComponent;
