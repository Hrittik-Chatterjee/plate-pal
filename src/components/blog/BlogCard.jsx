/* eslint-disable react/prop-types */
const BlogCard = ({ blog }) => {
  return (
    <div className="bg-slate-200 mt-8 rounded-lg overflow-hidden shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 pl-5 pt-3 pb-3">
        {blog.title}
      </h2>
      <p className="text-gray-600 text-sm pl-6 pb-3">By {blog.author}</p>
      <img
        className="w-full  h-[400px] object-cover object-center"
        src={blog.image}
        alt="blog image"
      />
      <div className="p-6">
        <p className="py-6">{`${blog.details.substring(0, 100)}${
          blog.details.length > 100 ? "..." : ""
        }`}</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
