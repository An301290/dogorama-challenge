import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import ParkComponent from "./ParkComponent";

const ParkListing = () => {
  const parks = useSelector((state) => state);
  console.log(parks);
  const fetchParks = async () => {
    const response = await axios
      .get(
        "https://functions.dogorama-services.com/getParks?postcodecity=04105 Leipzig&country=DE"
      )
      .catch((err) => {
        console.log("Err", err);
      });
    console.log(response.data);
  };
  useEffect(() => {
    fetchParks();
  }, []);
  return (
    <div className="ui grid container">
      <ParkComponent />
    </div>
  );
};

export default ParkListing;
