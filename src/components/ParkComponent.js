import React from "react";
import { useSelector } from "react-redux";
import ParkRatings from "./ParkRatings";

const ParkComponent = () => {
  const parks = useSelector((state) => state.allParks.parks);
  const renderList = parks.map((park) => {
    const {
      id,
      images,
      name,
      postcode,
      city,
      country,
    } = park;
    return (
      <div className="ui columns={3} divided" key={id}>
        <div className="ui link cards">
          <div className="card">
            <div className="image centered">
              <img
                src={
                  images.length
                    ? images
                    : "https://dogorama.app/wp-content/uploads/2021/02/placeholder_park_meadow_thumbnail.png"
                }
                alt={name}
              />
            </div>
            <div className="content">
              <div className="header">{name}</div>
              <div className="meta rating">
                <ParkRatings id={id} />
              </div>
            </div>
            <div className="ui center">
              <a
                href={`https://dogorama.app/de-${country}/auslaufgebiete/${postcode}_${city}/${name}-${id}/`}
                target="_blank"
                rel="noreferrer"
              >
                <button className="ui button ">Go to Park</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ParkComponent;
