import React, { useEffect, useState } from "react";
import axios from "axios";

const ParkRatings = ({ id }) => {
  const [rating, setRating] = useState(0);
  console.log(id);
  const fetchPark = async () => {
    try {
      const response = await axios.get(
        `https://functions.dogorama-services.com/getParks?id=${id}`
      );
      setRating(response.data.parks[0].averageRating);
    } catch (error) {
      console.log("Err", error);
    }
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
