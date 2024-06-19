import { useEffect, useState } from "react";
import MyrecipeCard from "../components/myrecipe/MyrecipeCard";
import useAuth from "../hooks/useAuth";

const MyRecipes = () => {
  const [myrecipes, setMyrecipe] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch("https://plate-pal-server.onrender.com/recipes")
      .then((res) => res.json())
      .then((data) => setMyrecipe(data));
  }, []);
  const filteredRecipes = myrecipes.filter(
    (myrecipe) => myrecipe?.userEmail === user?.email
  );

  const handleDeleteProduct = (_id) => {
    setMyrecipe(myrecipes.filter((myrecipe) => myrecipe._id !== _id));
  };
  return (
    <div>
      <div className="font-bold text-black text-2xl text-center my-8 divider divider-success italic">
        My {""}
        <span className="text-green-900 ">Recipes...</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
        {filteredRecipes.map((myrecipe) => (
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
