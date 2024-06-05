import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const MyrecipeCard = ({ myrecipe, onDelete }) => {
  const handleDelete = async () => {
    await fetch(`https://plate-pal-server.vercel.app/recipes/${myrecipe._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        onDelete(myrecipe._id);
      });
  };
  return (
    <div className="card w-96 bg-base-300 shadow-xl text-black my-4 ">
      <figure>
        <img src={myrecipe?.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{myrecipe?.title}</h2>
        <p className="py-6">{`${myrecipe?.details.substring(0, 100)}${
          myrecipe?.details.length > 100 ? "..." : ""
        }`}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-xs btn-outline btn-warning">
            <Link to={`edit/${myrecipe._id}`}>Edit</Link>
          </button>
          <button
            onClick={handleDelete}
            className="btn btn-xs btn-outline btn-error"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyrecipeCard;
