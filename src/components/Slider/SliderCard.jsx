import Rating from "react-rating";

/* eslint-disable react/prop-types */
const SliderCard = ({ card }) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={card.image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{card.title}</h1>
          <div className="flex mt-2">
            <h1 className="mr-2">Ratings:</h1>

            <Rating
              style={{ maxWidth: 250 }}
              initialRating={card.ratings}
              emptySymbol={
                <img
                  src={"/public/Star-empty.png"}
                  width={20}
                  height={20}
                  alt=""
                />
              }
              fullSymbol={
                <img
                  src={"/public/Plain_Yellow_Star.png"}
                  width={20}
                  height={20}
                  alt=""
                />
              }
              readonly
            />
          </div>
          <p className="py-6">{`${card.details.substring(0, 100)}${
            card.details.length > 100 ? "..." : ""
          }`}</p>
          <button className="btn btn-primary">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
