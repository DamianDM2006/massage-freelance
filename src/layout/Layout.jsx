/** this page will detemine display based on the type of device the user is using.
 * mobile phone/ipad/notebook/computer terminal
 * size of screen being used.
 * sets context for display type (??)
 */
import { Outlet } from "react-router";

import NavBar from "./NavBar.jsx";

const Layout = () => {
  return (
    <div className="page">
      <header>
        <h1>Full Moon Massage</h1>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
};

export default Layout;