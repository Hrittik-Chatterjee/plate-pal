import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./HomeCategory.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const HomeCategory = () => {
  const [homecategory, setHomeCategory] = useState([]);

  useEffect(() => {
    fetch("https://plate-pal-server.onrender.com/categories")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        setHomeCategory(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <section className="m">
        <div className="font-bold text-2xl text-center my-8 divider divider-warning italic">
          Popular {""}
          <span className="text-green-900 ">Recipes Types...</span>
        </div>
        <Swiper
          id="swiperId"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper mb-6"
        >
          {homecategory.map((category) => (
            <SwiperSlide
              id="swiperslide"
              key={category._id}
              className="mr-12 relative"
            >
              <img
                src={category.image}
                alt="category image"
                className=" inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h2 className="text-white text-2xl uppercase">
                  {category.name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default HomeCategory;
