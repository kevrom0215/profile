import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // ✅ Import autoplay styles
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./SkillCarousel.css";

const SkillCarousel = ({ skills = [] }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={10}
      breakpoints={{
        320: { slidesPerView: 2 },  // Show 2 slides on very small screens
        480: { slidesPerView: 3 },  // Show 3 slides on small screens
        640: { slidesPerView: 4 },  // Show 4 slides on medium screens
        768: { slidesPerView: 6 },  // Show 6 slides on tablets
        1024: { slidesPerView: 10 }, // Show 10 slides on large screens
      }}
      loop={true} // ✅ Enable infinite scrolling
      autoplay={{
        delay: 0, // ✅ Removes delay between slides
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={3000}
      freeMode= {true}
    >
      {skills.map((skill) => (
        <SwiperSlide key={skill.name}>
          <div className="skill-slide">
            <img
              src={skill.imageUrl}
              alt={`${skill.name} logo`}
              className="skill-image"
            />
            <span className="tooltiptext">{skill.name}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SkillCarousel;
