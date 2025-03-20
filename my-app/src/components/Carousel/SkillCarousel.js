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
        640: { slidesPerView: 10 },
        1024: { slidesPerView: 10 },
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
