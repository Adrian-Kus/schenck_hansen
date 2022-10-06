import NavbarDesktop from "components/layouts/NavbarDesktop";
import NavbarMobile from "components/layouts/NavbarMobile";
import nav from "components/layouts/Navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={nav.desktop}>
        <NavbarDesktop />
      </div>
      <div className={nav.mobile}>
        <NavbarMobile />
      </div>
    </>
  );
}

export default Navbar;
