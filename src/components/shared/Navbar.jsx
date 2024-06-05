import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <div
      className=" bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: 'url("/navbarbg1.jpg")',
      }}
    >
      <div className="navbar pt-16">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52 "
            >
              <li>
                <Link
                  to="/"
                  className="btn btn-outline btn-sm   mt-2 hover:bg-success text-black  "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/addrecipe"
                  className="btn btn-outline btn-sm   mt-2 hover:bg-success text-black "
                >
                  Add Recipe
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="btn btn-outline btn-sm   mt-2 hover:bg-success text-black "
                >
                  Category
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="btn btn-outline btn-sm   mt-2 hover:bg-success text-black "
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="btn btn-outline btn-sm   mt-2 hover:bg-success text-black "
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="btn btn-outline btn-sm   mt-2 hover:bg-success text-black "
                >
                  About
                </Link>
              </li>
              {user && (
                <li>
                  <Link
                    className="btn btn-outline btn-sm   mr-2 hover:bg-success text-white "
                    to={"/dashboard"}
                  >
                    Dashboard
                  </Link>
                </li>
              )}
              <li>
                <Link
                  to="/login"
                  className="btn btn-outline btn-sm   mt-2 hover:bg-success text-black "
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="btn btn-outline btn-sm   mt-2 hover:bg-success text-black "
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          <a className="btn text-green-500 btn-ghost text-xl ">PlatePal</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                to="/"
                className="btn btn-outline btn-sm   mr-2 hover:bg-success text-white  "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/addrecipe"
                className="btn btn-outline btn-sm   mr-2 hover:bg-success text-white "
              >
                Add Recipe
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className="btn btn-outline btn-sm   mr-2 hover:bg-success text-white "
              >
                Category
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="btn btn-outline btn-sm   mr-2 hover:bg-success text-white "
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="btn btn-outline btn-sm   mr-2 hover:bg-success text-white "
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="btn btn-outline btn-sm   mr-2 hover:bg-success text-white "
              >
                About
              </Link>
            </li>
            {user && (
              <li>
                <Link
                  className="btn btn-outline btn-sm   mr-2 hover:bg-success text-white "
                  to={"/dashboard"}
                >
                  Dashboard
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/login"
                className="btn btn-outline btn-sm   mr-2 hover:bg-success text-white "
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="btn btn-outline btn-sm   mr-2 hover:bg-success text-white "
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
        {user && (
          <button
            onClick={handleLogout}
            className="btn btn-sm bg-red-500 text-white hidden lg:block"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
