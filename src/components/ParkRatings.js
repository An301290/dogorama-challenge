import React, { useEffect, useState } from "react";
import axios from "axios";

const ParkRatings = ({ id }) => {
  const [rating, setRating] = useState(0);
  console.log(id);
  const fetchPark = async () => {
    const response = await axios
      .get(`https://functions.dogorama-services.com/getParks?id=${id}`)
      .catch((err) => {
        console.log("Err", err);
      });
    console.log(response.data.parks[0].averageRating);
    setRating(response.data.parks[0].averageRating);
  };
  useEffect(() => {
    fetchPark();
  }, []);
  return (
    <div>
      {rating ? (
        <h1>{Math.round(rating * 10) / 10} out of 5 paws</h1>
      ) : (
        <h1>No ratings yet</h1>
      )}
    </div>
  );
};

export default ParkRatings;
