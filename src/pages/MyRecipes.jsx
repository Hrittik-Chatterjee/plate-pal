import { useEffect, useState } from "react";
import MyrecipeCard from "../components/myrecipe/MyrecipeCard";

const MyRecipes = () => {
  const [myrecipe, setMyrecipe] = useState([]);

  useEffect(() => {
    fetch("https://plate-pal-server.vercel.app/recipes")
      .then((res) => res.json())
      .then((data) => setMyrecipe(data));
  }, []);

  const handleDeleteProduct = (_id) => {
    setMyrecipe(myrecipe.filter((myrecipe) => myrecipe._id !== _id));
  };
  return (
    <div>
      <h1 className="font-bold text-2xl text-black text-center my-8">
        My {""}
        <span className="text-green-900 ">Recipes...</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {myrecipe.map((myrecipe) => (
          <MyrecipeCard
            key={myrecipe._id}
            myrecipe={myrecipe}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default MyRecipes;
