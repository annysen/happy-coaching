import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import logo from "../../assets/resourse/logo/Logo.png";
import NavItems from "./NavItems";

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="md:flex md:justify-between md:items-center md:mx-20 md:my-2.5">
      {/* Logo section */}
      <div className="flex items-center justify-between p-4">
        <a href="/">
          <img className="w-36 h-7" src={logo} alt="Logo" />
        </a>
        {/* Bar menu for mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <Bars3Icon className="w-6 h-6" />
        </button>
      </div>
      {/* Nav items */}
      <div
        className={`md:flex ${
          isNavOpen ? "block" : "hidden"
        } mt-4 ml-5 md:mt-0`}
      >
        <NavItems />
      </div>
    </div>
  );
}

export default Nav;
