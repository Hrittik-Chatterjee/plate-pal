import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const Dashboard = () => {
  const { user } = useAuth();
  const [recipesDatas, setMyRecipesData] = useState([]);
  const [cakeRecipesCount, setCakeRecipesCount] = useState(0);
  const [cheeseRecipesCount, setCheeseRecipesCount] = useState(0);
  const [pizzaRecipesCount, setPizzaRecipesCount] = useState(0);
  const [chocolateRecipesCount, setChocolateRecipesCount] = useState(0);
  const [burgerRecipesCount, setBurgerRecipesCount] = useState(0);

  const [userinfo, setUserInfo] = useState();
  useEffect(() => {
    fetch(`https://plate-pal-server.onrender.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
      });
  }, [user]);

  useEffect(() => {
    fetch("https://plate-pal-server.onrender.com/recipes")
      .then((res) => res.json())
      .then((data) => setMyRecipesData(data));
  }, []);

  useEffect(() => {
    // Filter recipes and calculate counts
    const filteredBurger = recipesDatas.filter(
      (recipe) => recipe.category === "burger"
    );
    const filteredCake = recipesDatas.filter(
      (recipe) => recipe.category === "cake"
    );
    const filteredCheese = recipesDatas.filter(
      (recipe) => recipe.category === "cheese"
    );
    const filteredPizza = recipesDatas.filter(
      (recipe) => recipe.category === "pizza"
    );
    const filteredChocolate = recipesDatas.filter(
      (recipe) => recipe.category === "chocolate"
    );

    setBurgerRecipesCount(filteredBurger.length);
    setCakeRecipesCount(filteredCake.length);
    setCheeseRecipesCount(filteredCheese.length);
    setPizzaRecipesCount(filteredPizza.length);
    setChocolateRecipesCount(filteredChocolate.length);
  }, [recipesDatas]);

  const data = [
    { name: "Burger", count: burgerRecipesCount },
    { name: "Cake", count: cakeRecipesCount },
    { name: "Cheese", count: cheeseRecipesCount },
    { name: "Pizza", count: pizzaRecipesCount },
    { name: "Chocolate", count: chocolateRecipesCount },
  ];

  return (
    <div>
      <div className="p-5 border rounded  text-white max-w-sm bg-slate-800">
        <img src={userinfo?.imageUrl || "/placeholder.jpg"} />
        <div className="text-sm mt-5">
          <h1>
            <span className=" font-bold">User Name:</span>{" "}
            {userinfo?.name || "Not available"}
          </h1>
          <p>
            <span className="font-bold">Email:</span> {userinfo?.email}
          </p>
          <Link
            to={`/dashboard/profile/edit/${userinfo?.email}`}
            className="btn btn-xs btn-outline btn-warning mt-2"
          >
            Edit Profile
          </Link>
        </div>
      </div>
      <div className="mt-12  md:w-full lg:w-full">
        <div className="md:w-1/2">
          <h2 className="text-black text-2xl my-4 font-bold text-center  ">
            Recipe Counts by Category:
          </h2>
          <div className="hidden md:block lg:block">
            <BarChart width={600} height={400} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
        <div className="block md:hidden lg:hidden">
          <BarChart width={300} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
