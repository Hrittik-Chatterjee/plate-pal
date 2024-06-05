import { useState, useEffect } from "react";
import BlogCard from "../components/blog/BlogCard";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/recipes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="flex  justify-between">
        <div>
          <h1 className="font-bold mt-4">Search Blog</h1>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="mt-12 flex">
          <h1 className="text-md text-green-700 mr-2">Recipe Types:</h1>|{" "}
          <Link className="link link-hover link-warning ml-2 mr-2">Cheese</Link>
          |
          <Link className="link link-hover link-warning ml-2 mr-2">
            Chocolate
          </Link>
          |<Link className="link link-hover link-warning ml-2 mr-2">Cake</Link>|
          <Link className="link link-hover link-warning ml-2 mr-2">Pizza</Link>|
          <Link className="link link-hover link-warning ml-2 mr-2">Burger</Link>
          |
        </div>
      </div>
      <div className="grid grid-cols-1  ">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
