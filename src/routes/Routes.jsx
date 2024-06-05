import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Categories from "../pages/Categories";
import AddRecipe from "../pages/AddRecipe";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./Private/PrivateRoute";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import MyRecipes from "../pages/MyRecipes";
import EditRecipe from "../pages/EditRecipe";
import MyInfo from "../pages/MyInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/Addrecipe",
        element: <AddRecipe />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },

      {
        path: "addrecipe",
        element: (
          <PrivateRoute>
            <AddRecipe />
          </PrivateRoute>
        ),
      },
      {
        path: "my-recipes",
        element: (
          <PrivateRoute>
            <MyRecipes />
          </PrivateRoute>
        ),
      },
      {
        path: "my-info",
        element: (
          <PrivateRoute>
            <MyInfo />
          </PrivateRoute>
        ),
      },
      {
        path: "my-recipes/edit/:id",
        element: (
          <PrivateRoute>
            <EditRecipe />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://plate-pal-server.vercel.app/recipes/${params._id}`),
      },
    ],
  },
]);
