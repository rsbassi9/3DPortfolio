import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/" // Points to the top of the page
          className="flex items-center gap-2" // Special ract router DOM link so we can give it a click functiion
          onClick={() => {
            setActive(""); // Keeps track of where we are on the page
            window.scrollTo(0, 0); // Scroll to the top of the page
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Rajvir Bassi<span className="sm:block hidden"> | Portfolio</span>
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
