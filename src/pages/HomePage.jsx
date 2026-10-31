import { useState, useEffect } from "react";
import { Link } from "react-router";
import { getServices } from "../api/services.js";

const HomePage = () => {
  const [services, setServices] = useState([]);
  const syncServices = async() => {
    try {
      const data = await getServices();
      setServices(data);
    } catch(err) {
      console.log(`ERROR:`,err)
    }
  };
  
  useEffect(() => {
    syncServices();
  }, []);
  
  if (!services) {return (
    <div className="home">
      <h3>Waiting for the server to respond. LOADING. . .</h3>
    </div>
  )}; 

  const ServicesList = ({ services }) => {
      console.log(`services:`, services);
      return (
        <>
          <span >
            <h3 className="margNoTB"> Current Available Services</h3>
            <p className="margNoTB"><small>Select the title to learn more</small></p>
          </span>
          <ul className="servList">
            {services.map((service) => (<ServiceLI key={service.id} service={service} />))}
          </ul>
        </>
      )
  };

  const ServiceLI = ({ service }) => {
    return (
      <li>
        <span>
          <Link to={"/home/" + service.id}>
            <h4>{service.title}</h4>
          </Link>
        </span>
        <Link to={"/appointments"}>
          <button><strong>Schedule Appointment</strong> <small>for this service</small>.</button>
          {/* <MakeAppointmnet /> */}
        </Link>
      </li>
    )
  };

  /**
   * <ServicesList >
   *  will include title: and description (as <ListDetails />  ????)
   *  will eventually include
   *    cost:
   *    duration:
   *  <MakeAppt /> will take the user to the LoginPage or the AppointmentsPage
   */

  return (
    <div className="home">
      <div className="welcome">
        <h2>Home page: Welcome</h2>
        <p>
          This is the part where we tell you a little bit about ourselves. We hope you are impressed.
        </p>
      </div>
      <ServicesList services={services}/>
    </div>
  )
};

export default HomePage;