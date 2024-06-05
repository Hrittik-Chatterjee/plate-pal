// src/components/Sidebar.js

import {
  FaCogs,
  FaUserLock,
  FaHome,
  FaPizzaSlice,
  FaPhone,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="  text-white  drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="flex items-center justify-center h-16 shadow-md">
        <h1 className="text-2xl font-bold">User Dashboard</h1>
      </div>
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-gray-500">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex-1 overflow-y-auto">
          <ul className="p-4 space-y-4">
            <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md">
              <Link to={"home"} className="flex items-center w-full space-x-3">
                <FaCogs className="text-xl" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md">
              <Link
                to={"my-info"}
                className="flex items-center w-full space-x-3"
              >
                <FaUserLock className="text-xl" /> <span>My Info</span>
              </Link>
            </li>
            <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md">
              <Link
                to={"my-recipes"}
                className="flex items-center w-full space-x-3"
              >
                <FaPizzaSlice className="text-xl" /> <span>My Recipes</span>
              </Link>
            </li>
            <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md">
              <Link to="/" className="flex items-center w-full space-x-3">
                <FaHome className="text-xl" /> <span>Home</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-4">
          {/* <Link
            to="/"
            className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md"
          >
            <FaGithub className="text-xl" />
            <span>GitHub Repository</span>
          </Link> */}
          <Link
            to="/about"
            className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md mt-4"
          >
            <FaCogs className="text-xl" />
            <span>About</span>
          </Link>
          <Link
            to="/contact"
            className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md mt-4"
          >
            <FaPhone className="text-xl" />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
