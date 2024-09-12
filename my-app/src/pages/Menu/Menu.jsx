import React from "react";
import "../../styles/global.css";
import useCoffeeService from "../../services/useCoffeeService";
import { CoffeeList, CoffeeSlideShow } from "../../components/CoffeeDisplay/CoffeeDisplay";
import "./Menu.css";

const Menu = () => {
  const { data, error, loading } = useCoffeeService(); // Fetch data from the service

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="wrapper">
      <div className="grid-2">
        <CoffeeSlideShow coffeeData={data}/>
      </div>
      <div className="grid-2">
        <CoffeeList coffeeData={data} />
      </div>
    </div>
  );
};

export default Menu;
