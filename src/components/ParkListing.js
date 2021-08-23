import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import ParkComponent from "./ParkComponent";
import { setParks } from "../redux/actions/parkActions";

const ParkListing = () => {
  const parks = useSelector((state) => state);
  console.log(parks);
  const dispatch = useDispatch();
  const fetchParks = async () => {
    const response = await axios
      .get(
        "https://functions.dogorama-services.com/getParks?postcodecity=04105 Leipzig&country=DE"
      )
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setParks(response.data.parks));
  };
  useEffect(() => {
    fetchParks();
  }, []);
  console.log("Parks:", parks);
  return (
    <>
      <div className="mainTitle">
        <h1>Best Dog Parks</h1>
        <h2>🐶</h2>
        <h2>Leipzig</h2>
      </div>
      <div className="ui grid container centered">
        <ParkComponent />
      </div>
    </>
  );
};

export default ParkListing;
