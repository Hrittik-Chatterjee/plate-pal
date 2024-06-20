/* eslint-disable react/prop-types */
import Rating from "react-rating";
import { Link } from "react-router-dom";

const SliderCard = ({ card }) => {
  return (
    <div className="hero  bg-base-200 md:w-full lg:w-full md:h-full lg:h-full h-[500px] lg:my-0 md:my-0 my-4">
      <div
        className="hero-content flex-col lg:flex-row items-center justify-center"
        style={{
          maxWidth: "600px",
          maxHeight: "400px",
          width: "600px",
          height: "400px",
        }}
      >
        <img
          src={card.image}
          className=" w-[350px]  h-56 lg:w-96 lg:h-72  md:w-96 md:h-72 object-cover rounded-lg shadow-2xl md:mr-0 lg:mr-0  mr-36"
        />
        <div className="ml-6" style={{ width: "300px" }}>
          <h1 className="md:text-2xl lg:text-2xl text-lg font-bold text-left">
            {card.title}
          </h1>
          <div className="flex mt-2 items-center">
            <h1 className="mr-2">Ratings:</h1>
            <Rating
              style={{ maxWidth: 250 }}
              initialRating={card.ratings}
              emptySymbol={
                <img src={"/Star-empty.png"} width={20} height={20} alt="" />
              }
              fullSymbol={
                <img
                  src={"/Plain_Yellow_Star.png"}
                  width={20}
                  height={20}
                  alt=""
                />
              }
              readonly
            />
          </div>
          <p className=" md:mr-0 lg:mr-0 mr-20 py-6 overflow-hidden text-ellipsis whitespace-nowrap">
            {card.details}
          </p>
          <button className="btn btn-success btn-outline btn-sm">
            <Link to={`/recipes/${card._id}`}>Read More...</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
