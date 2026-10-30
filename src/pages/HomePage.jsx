import { useState, useEffect } from "react";
import { getServices } from "../api/services.js";

const HomePage = () => {
  const [services, setServices] = useState([]);

  

  return (
    <div className="home">
      <h2>Home page</h2>
    </div>
  )
};

export default HomePage;