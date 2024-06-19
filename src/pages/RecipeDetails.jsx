import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RecipeDetails = () => {
  const recipe = useLoaderData();
  const user = useAuth();
  const { title, author, category, ratings, image, details } = recipe;
  return (
    <div className=" mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-6">
      <img
        className="w-full   h-[400px] md:mx-0 lg:mx-0 mx-4 object-cover object-center"
        src={image}
        alt="blog cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm font-semibold italic mt-2">
          Ratings: {""}
          {ratings}
        </p>
        <p className="font-bold text-sm text-black uppercase mt-4">
          Category: <span className="text-warning ">{category}</span>
        </p>
        <p className="mt-2">{details}</p>
        <div className="flex items-center mt-4">
          <img
            className="w-10 h-10 object-cover rounded-full"
            src={
              user?.photoURL ||
              "https://i.pinimg.com/736x/18/b9/ff/18b9ffb2a8a791d50213a9d595c4dd52.jpg"
            }
            alt="author"
          />

          <div className="ml-4">
            <p className="text-gray-800 text-sm font-semibold">{author}</p>
            <p className="text-gray-600 text-sm">9 February 2021 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
