/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const NewRecipes = ({ newrecipe }) => {
  return (
    <div className="max-w-xs w-full rounded overflow-hidden shadow-lg m-2 grid grid-rows-subgrid row-span-3">
      <img className="w-full h-72" src={newrecipe?.image} alt="recipe image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{newrecipe?.title}</div>
        <p className="py-6">
          {`${newrecipe?.details?.substring(0, 100)}${
            newrecipe?.details?.length > 100 ? "." : ""
          }`}{" "}
          <Link
            to={`/recipes/${newrecipe._id}`}
            className="text-sm text-green-700 font-medium"
          >
            read more...
          </Link>
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Author: {newrecipe?.author}
        </span>
      </div>
    </div>
  );
};

export default NewRecipes;
