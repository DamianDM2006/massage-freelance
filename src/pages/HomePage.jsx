import { useState, useEffect } from "react";
import { getServices } from "../api/services.js";

const HomePage = () => {
  const [services, setServices] = useState([]);

  const syncServices = async() => {
    const data = await getServices();
    setServices(data);
  };

  useEffect(() => {
    syncServices();
  }, []);

  console.log(`services:`, services);

  return (
    <div className="home">
      <h2>Home page</h2>
    </div>
  )
};

export default HomePage;