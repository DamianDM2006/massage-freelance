import { Routes, Route } from "react-router";

import Layout from "./layout/Layout.jsx";
import Appointments from "./pages/Appointments.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import ServiceDetails from "./pages/ServiceDetails.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/serviceDetails" element={<ServiceDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
