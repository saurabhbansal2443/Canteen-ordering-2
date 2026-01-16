import React from "react";
import { useGetRestaurantDetails } from "../Hooks";

const RestaurantGrid = () => {
  const data = useGetRestaurantDetails();
  console.log("API data", data);
  return <div></div>;
};

export default RestaurantGrid;
