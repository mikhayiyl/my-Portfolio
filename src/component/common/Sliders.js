import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";

import ProjectCard from "./ProjectCard";
import { SwiperContainer } from "./SwiperStyles";
import { Data } from "../../Data";
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function App() {
  const { projects } = Data;
  return (
    <SwiperContainer>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        grabCursor={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper my-3"
      >
        {projects.map((project) => (
          <SwiperSlide key={project._id}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
}
