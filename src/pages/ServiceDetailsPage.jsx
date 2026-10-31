import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { getServiceDetails } from "../api/services.js";

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    const syncService = async() => {
      const detail = await getServiceDetails(id);
      setService(detail);
    };
    syncService();
  }, [id]);

  return (
    <div className="serveDetails">
      <h2>{service.title}</h2>
      <p><strong>{service.description}</strong></p>
        <Link to={"/appointments"}>
          <button><strong>Schedule Appointment</strong> <small>for this service</small>.</button>
          {/* <MakeAppointmnet /> */}
        </Link>
    </div>
  )
};

export default ServiceDetailsPage;