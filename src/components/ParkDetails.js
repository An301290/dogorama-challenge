import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ParkDetails = () => {
  const { productId } = useParams();
  console.log(productId);
  return (
    <div>
      <h1>ParkDetails</h1>
    </div>
  );
};

export default ParkDetails;
