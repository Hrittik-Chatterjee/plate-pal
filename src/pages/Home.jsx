import { useEffect, useState } from "react";
import NewRecipes from "../components/NewRecipes/NewRecipes";
import Slider from "../components/Slider/Slider";
import About from "./About";
import Contact from "./Contact";
import HomeCategory from "../components/homecategory/HomeCategory";
import BlogCard from "../components/blog/BlogCard";

const Home = () => {
  const [newrecipes, setNewrecipes] = useState([]);

  useEffect(() => {
    fetch("https://plate-pal-server.onrender.com/recipes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        setNewrecipes(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      <Slider />
      <About />

      <div>
        <div className="text-center text-2xl font-bold my-8 divider divider-success italic">
          Newly Added <span className="text-green-900 ">Recipes...</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:ml-0 lg:ml-0 ml-16">
          {newrecipes
            .slice()
            .reverse()
            .slice(0, 4)
            .map((newrecipe) => (
              <NewRecipes key={newrecipe._id} newrecipe={newrecipe} />
            ))}
        </div>
      </div>
      <HomeCategory />

      <div>
        <div className="font-bold text-2xl text-center my-8 divider divider-success italic">
          New {""}
          <span className="text-green-900 ">Blogs...</span>
        </div>
        <div className="grid grid-cols-1  ">
          {newrecipes
            .slice()
            .reverse()
            .slice(0, 1)
            .map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Home;
