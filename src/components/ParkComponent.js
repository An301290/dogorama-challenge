import React from "react";
import { useSelector } from "react-redux";

const ParkComponent = () => {
  const parks = useSelector((state) => state.allParks.parks);
  const renderList = parks.map((park) => {
    const { id, images, name, category, creationDate } = park;
    return (
      <div className="four column wide" key="id">
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={images} alt={name} />
            </div>
            <div className="content">
              <div className="header">{name}</div>
              <div className="meta name">{category}</div>
              <div className="meta ratings">{creationDate}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ParkComponent;
