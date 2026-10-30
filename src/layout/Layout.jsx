/** this page will detemine display based on the type of device the user is using.
 * mobile phone/ipad/notebook/computer terminal
 * size of screen being used.
 * sets context for display type (??)
 */
import { Outlet } from "react-router";

import NavBar from "./NavBar.jsx";
import LanguageSelect from "./LanguageSelect.jsx";
import HeadInsert from"./HeadInsert.jsx";

const Layout = () => {
  return (
    <div className="page">
      <header className="title">
        <h1>Full Moon Massage</h1>
        <NavBar />
        <LanguageSelect />
        <HeadInsert />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
};

export default Layout;