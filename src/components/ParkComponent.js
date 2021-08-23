import React from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

const ParkComponent = () => {
  const parks = useSelector((state) => state.allParks.parks);
  const renderList = parks.map((park) => {
    const { id, images, name, category, creationDate } = park;
    return (
      <div className="ui grid columns={3} divided" key="id">
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={images} alt={name} />
            </div>
            <div className="content">
              <div className="header">{name}</div>
              <div className="meta rating">{category}</div>
              <div className="meta">{creationDate}</div>
            </div>
            <button className="ui green button">Go to Park</button>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ParkComponent;
