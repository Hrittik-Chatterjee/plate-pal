import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import SliderCard from "./SliderCard";

const Slider = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://plate-pal-server.vercel.app/recipes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {cards.map((card) => (
          <SwiperSlide key={card._id}>
            <SliderCard card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
