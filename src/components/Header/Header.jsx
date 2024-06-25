import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import useTheme from '../../context/themeContext.js'

export default function Header() {
  const [isHide, setIsHide] = useState(true);

  const handleClick = () => {
    setIsHide(!isHide);
  };

  const {theme, lightTheme, darkTheme} = useTheme();

  const handleBtn = (e) => {
    if(theme === 'light') darkTheme();
    else lightTheme();
  }

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white dark:bg-gray-900 dark:border-b-[1px] dark:border-gray-200 px-4 md:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="/github.svg"
              className="h-10 dark:invert w-8"
              alt="Logo"
            />
          </Link>

          {/* Menu Button  */}
          <div className="flex flex-wrap gap-5 justify-center items-center">
            <div className="flex md:hidden flex-wrap">
            <button className="border p-2 rounded-lg bg-gray-200 dark:bg-gray-700 focus:outline-none focus:border-2 focus:border-gray-600 duration-200" onClick={handleBtn}>
                <img src={theme === 'dark' ? './light.svg' : './dark.svg'} width={20} />
              </button>
            </div>
          
            <button
              className="md:hidden focus:outline-none"
              onClick={handleClick}
              onBlur={() => {
                setTimeout(() => {
                  setIsHide(!isHide);
                }, 500);
              }}
            >
              <svg
                className="h-6 w-10 text-gray-800"
                fill="none"
                viewBox="0 0 24 22"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className="hidden gap-5 justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <div className="flex">
              <button className="border p-2 rounded-lg bg-gray-200 dark:bg-gray-700 focus:outline-none focus:border-2 focus:border-gray-600 duration-200" onClick={handleBtn}>
                <img src={theme === 'dark' ? './light.svg' : './dark.svg'} width={20} />
              </button>
            </div>
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700 dark:text-gray-200"
                    } border-b border-gray-100 md:hover:text-gray-100 md:border-0 hover:text-gray-100 md:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700 dark:text-gray-200"
                    } border-b border-gray-100 md:hover:text-gray-100 md:border-0 hover:text-gray-100 md:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Menu */}
          <div
            className={` ${
              isHide ? "hidden" : "block"
            } md:hidden w-full md:w-auto md:order-1`}
            id="menu"
          >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
              <li>
                <NavLink
                  activeclassname="text-orange-700"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700 dark:text-gray-200"
                    } border-b border-gray-100 md:hover:text-gray-100 md:border-0 hover:text-gray-100 md:p-0`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeclassname="text-orange-700"
                  aria-current="page"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700 dark:text-gray-200"
                    } border-b border-gray-100 md:hover:text-gray-100 md:border-0 hover:text-gray-100 md:p-0`
                  }
                  to="/github"
                >
                  GitHub
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
