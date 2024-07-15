import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOn, setOn] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.slice(1);
    const currentNavItem = path.charAt(0).toUpperCase() + path.slice(1);
    setActiveNav(currentNavItem || "name");
  }, [location]);
  const handleName = (navItem) => {
    setActiveNav("name");
  };

  const handleOn = () => {
    setOn(!isOn);
  };

  return (
    <>
      <nav
        className="bg-gray-900 fixed top-0 left-0 w-full z-50 
       "
      >
        <div className="py-2 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div
              onClick={handleOn}
              className="absolute inset-y-0 left-0 flex items-center sm:hidden"
            >
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                {isOn ? (
                  <RxCross1 />
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <Link to="/">
                <div className="flex flex-shrink-0 items-center ">
                  <a
                    onClick={handleName}
                    className={`hover:text-gray-300 transition duration-300 uppercase ${
                      activeNav === "name"
                        ? " rounded-[50px] border border-green-600 bg-gray-900 px-3 py-2 text-sm font-bold text-green-600"
                        : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    } font-semibold`}
                    aria-current="page"
                  >
                    Chaudhari Sufiyan
                  </a>
                </div>
              </Link>

              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {["Home", "Projects", "Certificates", "Contact"].map(
                    (navItem) => (
                      <Link
                        to={`/${navItem.toLowerCase()}`}
                        key={navItem}
                        className={`hover:text-gray-300 transition duration-300 ${
                          activeNav === navItem
                            ? " rounded-[50px] border border-green-600 bg-gray-900 px-3 py-2 text-sm font-bold text-green-600"
                            : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`}
                      >
                        {navItem}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>

            <a
              href="/SUFIYAN_CV.pdf"
              download="SUFIYAN_CV.pdf"
              className=" 
               p-1
               
                
                flex  rounded-[50px] bg-slate-50 border-none"
              size="sm"
              variant="outline"
            >
              <FiDownload className="mt-1 ml-1 mr-0.5 " size={16} />

              <p className="mr-3 ml-1 font-bold  ">Resume</p>
            </a>
          </div>
        </div>

        {isOn && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2" onClick={handleOn}>
              <Link
                to={"/"}
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                aria-current="page"
              >
                Home
              </Link>

              <Link
                to={"/projects"}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Projects
              </Link>
              <Link
                to={"certificates"}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Certificates
              </Link>
              <Link
                to={"contact"}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Contacts
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
