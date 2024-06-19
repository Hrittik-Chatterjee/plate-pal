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
import EditProfile from "../pages/EditProfile";
import RecipeDetails from "../pages/RecipeDetails";

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
      {
        path: "/recipes/:id",
        element: <RecipeDetails />,
        loader: ({ params }) =>
          fetch(`https://plate-pal-server.onrender.com/recipes/${params.id}`),
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
        path: "profile/edit/:id",
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://plate-pal-server.onrender.com/users/${params.id}`),
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
        path: "my-recipes/edit/:id",
        element: (
          <PrivateRoute>
            <EditRecipe />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://plate-pal-server.onrender.com/recipes/${params.id}`),
      },
    ],
  },
]);
