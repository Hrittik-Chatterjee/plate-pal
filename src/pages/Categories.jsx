import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { useEffect, useState } from "react";
import CategoryCard from "../components/category/CategoryCard";

const Categories = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://plate-pal-server.onrender.com/recipes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        setCategory(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const pizza = category.filter((item) => item.category === "pizza");
  const cheese = category.filter((item) => item.category === "cheese");
  const chocolate = category.filter((item) => item.category === "chocolate");
  const burger = category.filter((item) => item.category === "burger");
  const cake = category.filter((item) => item.category === "cake");

  return (
    <div className="text-center mt-2">
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Pizza</Tab>
          <Tab>Cheese </Tab>
          <Tab>Chocolate </Tab>
          <Tab>Burger </Tab>
          <Tab>Cake </Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {pizza.map((item) => (
              <CategoryCard key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cheese.map((item) => (
              <CategoryCard key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {chocolate.map((item) => (
              <CategoryCard key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {burger.map((item) => (
              <CategoryCard key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cake.map((item) => (
              <CategoryCard key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Categories;
