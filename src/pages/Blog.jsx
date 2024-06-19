import { useState, useEffect } from "react";
import BlogCard from "../components/blog/BlogCard";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://plate-pal-server.onrender.com/recipes")
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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBlogs = blogs.filter((blog) => {
    const query = searchQuery.toLowerCase();
    return (
      blog.title.toLowerCase().includes(query) ||
      blog.author.toLowerCase().includes(query) ||
      blog.category.toLowerCase().includes(query) ||
      blog.details.toLowerCase().includes(query)
    );
  });

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold my-4 mx-2">Search Blog</h1>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto mx-2 "
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="mt-12  lg:block md:block hidden">
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
      <div className="grid grid-cols-1">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
