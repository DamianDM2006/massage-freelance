import { Link, useParams } from "react-router";

const AppointmentsPage = () => {
  const { id } = useParams();
  console.log(`Appointments Page. id:`, id);

  return (
    <div className="Appts">
      <h2>Appointments page</h2>
    </div>
  )
};

export default AppointmentsPage;