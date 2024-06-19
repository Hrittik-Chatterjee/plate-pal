/* eslint-disable react/prop-types */
const CategoryCard = ({ item }) => {
  return (
    <div className="card w-96 bg-green-200 shadow-xl my-8">
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p>{`${item.details.substring(0, 100)}${
          item.details.length > 100 ? "..." : ""
        }`}</p>
      </div>
      <figure>
        <img className="w-full h-64" src={item.image} alt="recipe" />
      </figure>
    </div>
  );
};

export default CategoryCard;
