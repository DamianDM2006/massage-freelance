import { Routes, Route } from "react-router";

import Layout from "./layout/Layout.jsx";
import AppointmentsPage from "./pages/AppointmentsPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import ServiceDetailsPage from "./pages/ServiceDetailsPage.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/serviceDetails" element={<ServiceDetailsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
