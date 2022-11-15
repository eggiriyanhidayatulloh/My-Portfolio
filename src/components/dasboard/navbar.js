import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // Navbarblur
  window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  // menu navbarhidden
  // const hamburger = document.querySelector("#hamburger");
  // const navMenu = document.querySelector("#nav-menu");

  //   hamburger.addEventListener("click", function () {
  //   navMenu.classList.toggle("hidden");
  // });

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative ">
          <div className="px-4">
            <Link
              className="font-bold text-2xl lg:text-3xl text-primary block py-6 ml-10 font-mono"
              to={"/"}
            >
              My Portfolio
            </Link>
          </div>
          <div className="flex items-center px-4">
            <button
              type="button"
              id="hamburger"
              name="hamburger"
              className="burger-menu lg:hidden"
              onClick={updateMenu}
            >
              <span className={burger_class}></span>
              <span className={burger_class}></span>
              <span className={burger_class}></span>
            </button>

            <nav id="nav-menu" className={menu_class}>
              <ul className="block lg:flex">
                <li className="group">
                  <Link
                    className="text-base text-white py-2 mx-8 group-hover:text-primary flex"
                    as={Link}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="group">
                  <Link
                    className="text-base text-white py-2 mx-8 group-hover:text-primary flex"
                    s={Link}
                    to="/tentang"
                  >
                    About me
                  </Link>
                </li>
                <li className="group">
                  <Link
                    className="text-base text-white py-2 mx-8 group-hover:text-primary flex"
                    s={Link}
                    to="/portofolio"
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="group">
                  <Link
                    className="text-base text-white py-2 mx-8 group-hover:text-primary flex"
                    s={Link}
                    to="/contact"
                  >
                    Contact me
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* <div className={menu_class}></div> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
