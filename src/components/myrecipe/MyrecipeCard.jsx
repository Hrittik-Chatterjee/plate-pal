import { Link } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* eslint-disable react/prop-types */
const MyrecipeCard = ({ myrecipe, onDelete }) => {
  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    await fetch(
      `https://plate-pal-server.onrender.com/recipes/${myrecipe._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        onDelete(myrecipe._id);
      });
    toast.error("Deleted The Product", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Bounce,
    });
  };
  return (
    <div className="card md:w-96 lg:w-96 w-60 md:h-full lg:h-full h-96 bg-base-300 shadow-xl text-black border-none my-4 grid-rows-subgrid row-span-2">
      <div>
        <img
          className="w-full lg:h-72 md:h-72 h-32"
          src={myrecipe?.image}
          alt="Shoes"
        />
      </div>
      <div className="card-body md:w-full lg:w-full lg:h-full md:h-full h-32 w-56">
        <h2 className="card-title lg:text-xl text-lg md:text-xl">
          {myrecipe?.title}
        </h2>
        <p className="py-6 text-sm">{`${myrecipe?.details?.substring(0, 100)}${
          myrecipe?.details?.length > 100 ? "..." : ""
        }`}</p>
        <div className="card-actions justify-end ">
          <button className="btn btn-xs btn-outline btn-success">
            <Link to={`/recipes/${myrecipe._id}`}>Details</Link>
          </button>
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
